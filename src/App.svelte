<script>
  import { onMount } from 'svelte';

  const game = {
    running: false,
  };

  onMount(async () => {
    const rust = await import('../pkg');

    const render = () => {
      
    };

    const tick = () => {};

    const main = () => {
      // render
      render();
      // tick
      tick();
      window.requestAnimationFrame(main);
    };

    game.running = true;
    window.requestAnimationFrame(main);
  });
</script>

<style lang="scss">
  :global(html) {
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }

    width: 100%;
    height: 100%;
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 640px) {
    :global(body) {
      max-width: none;
    }
  }
</style>
