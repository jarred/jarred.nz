<script lang="ts">
  import { onMount } from "svelte";
  import ImgixClient from "@imgix/js-core";

  
  export let src:string;
  export let alt:string;
  let highResUrl;
  let highResVisible = false;

  let client = new ImgixClient({
    domain: "jarred-design.imgix.net"
  });

  let lowResUrl =  client.buildSrcSet(src, {
      q: 10,
      w: 24
    });

  onMount(() => {
    highResUrl = client.buildSrcSet(src, {
      q: 86,
      w: 1200
    });
  })

  const handleOnLoad = () => {
    highResVisible = true;
  }
</script>

<div class="relative z-0">
  <img class="low block w-full" class:active={!highResVisible} srcset={lowResUrl} alt={alt} />
  {#if highResUrl}
  <img class="high" class:active={highResVisible} srcset={highResUrl} alt="alt" on:load={handleOnLoad} />
  {/if}
</div>

<style>
img{
  @apply opacity-0;
}
img.low {
  image-rendering: pixelated;
}
img.high{
  @apply absolute inset-0 opacity-0 object-cover block w-full h-full;
}
img.active{
  @apply opacity-100;
}
</style>