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
      w: 20
    });

  let observer:IntersectionObserver;
  let isVisible = false;

  onMount(() => {
    srcSet =  client.buildSrcSet(src, {
      q: 86,
      w: 1200
    });
  })
</script>

<img class="block w-full" srcset={srcSet} alt={alt} />

<style>
img {
  image-rendering: pixelated;
}
</style>