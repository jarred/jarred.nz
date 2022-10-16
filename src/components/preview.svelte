<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer"
  import type IntersectionObserverEntry from "svelte-intersection-observer"
  import Pic from "./pic.svelte";
  export let project;
  let element:HTMLElement;
  let active:boolean
  let FM = project.frontmatter;

  const handleIntersection = (e:IntersectionObserverEntry) => {
    active = e.detail.isIntersecting;
  }
</script>

<IntersectionObserver {element} bind:intersecting={active} threshold={0.3} on:intersect={handleIntersection}>
  <div bind:this={element} class="h-[150vh] lg:h-[1000px] relative">
    <div class="sticky left-0 right-0 top-0 p-1 pb-[200px] text-grey">
      {FM.year}
      <a href={project.url}>{FM.title}</a>
      {active}
    </div>
    <Pic src={FM.teaser[0].src} />
  </div>
</IntersectionObserver>