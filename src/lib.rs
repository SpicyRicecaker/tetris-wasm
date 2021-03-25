use wasm_bindgen::prelude::*;
// use web_sys::console;

// #[wasm_bindgen]
// pub fn name() -> String {
//     String::from("from WASM")
// }

// This is like the `main` function, except for JavaScript.
// #[wasm_bindgen(start)]
// pub fn main_js() -> Result<(), JsValue> {
//     // This provides better error messages in debug mode.
//     // It's disabled in release mode so it doesn't bloat up the file size.
//     #[cfg(debug_assertions)]
//     console_error_panic_hook::set_once();

//     // Your code goes here!
//     console::log_1(&JsValue::from_str("Hello world!"));

//     Ok(())
// }

// how big is the tetris grid?

#[wasm_bindgen]
pub struct Grid {
    rows: i32,
    columns: i32,
}

#[wasm_bindgen]
impl Grid {
    #[wasm_bindgen]
    pub fn new () -> Self {
        Grid {
            // The tetris guidelines say the playfield should have 40 rows,
            // but tetriminoes are only spawned on the 21st and 22nd rows,
            // so we're gonna just do 22 rows and only display 10x20
            rows: 22,
            columns: 10
        }
    }
}