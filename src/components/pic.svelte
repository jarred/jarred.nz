<script lang="ts">
  import { onMount } from "svelte";
  import ImgixClient from "@imgix/js-core";

  
  export let src:string;
  export let alt:string;

  let client = new ImgixClient({
    domain: "jarred-design.imgix.net"
  });

  let srcSet =  client.buildSrcSet(src, {
      q: 1,
      w: 16
    });

  const handleLoad = (event:LoadEvent) => {
    console.log('image has loaded?', ev)
  }

  onMount(() => {
    setTimeout(() => {
    srcSet =  client.buildSrcSet(src, {
      q: 86,
      w: 2000
    });
  }, 2200)
  })
</script>

<img class="block w-full" srcset={srcSet} alt={alt} on:load={handleLoad} />

<style>
img {
  image-rendering: pixelated;
}
</style>