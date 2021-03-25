<script>
  import('../pkg').then(rust => {
    console.log(rust.Grid.new());
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
