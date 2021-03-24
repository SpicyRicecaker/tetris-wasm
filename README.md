# Hometown

Grid-based customizable homepage extension, with rain.

> POV: You are at home, the rain is pouring outside, but you chillin' inside, reading a really good book.

Preview the site @https://naughty-dijkstra-47fca6.netlify.app !

## TODO

- [x] Snap scroll multiple pages?
  - E.g. snap up for search engines, snap down for music
- [ ] **Separate default layout with custom user layouts** (basically the heart of the extension lol)
  - [ ] Create indexedDB to store config
- "Edit" mode
  - Easy way to add more links
  - [ ] Cog icon that opens absolute-positioned side menu, with edit button
  - [ ] In edit mode, create a temporary grid component on each level
  - [ ] When user clicks this temporary grid, add a real grid
  - We could also try using css `::before` and `::after`, idk
- [ ] Sublinks for major links
  - Animated moving up to halfway in the opposite direction of the major grid
  - Use `<svelte:self>`, this means actually making separate components
    - Each layer needs to have an orientation of up-down or left-right
    - This is perfect for JSON file and matches the svelte tutorial
- [ ] RAIN
  - Rain via canvas + rust wasm

## Attributions

Thanks to [Sainhe](https://github.com/sainnhe/gruvbox-material) for making the beautiful Gruvbox Material theme!

<div>Town extension icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>