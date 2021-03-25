const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
// Imports the WasmPackPlugin, which allows for auto wasm-pack building of rust files as they're modified!
// This is basically the reason that we're forced to use webpack, since I couldn't get @wasm-tool/rollup...plugin to work
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
// Import swc to be inserted into svelte-preprocess for much faster compilations!
// Keep in mind that *TREE SHAKING CANNOT BE TURNED OFF*. This means
// variables only referenced in svelte markup will be trimmed. Currently ugly
// hacks are used to keep these variables such as wrapping them in a dummy function
// const { transformSync } = require('@swc/core');

module.exports = {
  entry: {
    'build/bundle': ['./src/main.ts'],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json')),
    },
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      // Changed from ts-loader to swc-loader
      {
        test: /\.ts$/,
        // Check https://swc.rs/docs/usage-core#transformsync for more config options
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({
              sourceMap: !prod,
              postcss: true,
              defaults: {
                script: 'ts',
                style: 'scss',
              },
            }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // Sets the WasmPackPlugin to root for auto reload
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    hot: true,
  },
  experiments: {
    syncWebAssembly: true
    // asyncWebAssembly: true,
  },
};
