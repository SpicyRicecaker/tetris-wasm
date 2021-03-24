// This file is a straight copy of the svelte-preprocess config inside the `webpack.config.js` file,
// but we need this since the svelte lsp uses this to give us that juicy error info
//
// Keep in mind that according to the official docs, we *must use CommonJS* in this file.

const sveltePreprocess = require('svelte-preprocess');

const createPreprocessors = () =>
  sveltePreprocess({
    // postcss: true,
    defaults: {
      script: 'ts',
      style: 'scss',
    },
  });

module.exports = {
  preprocess: createPreprocessors(true),
  createPreprocessors,
};
