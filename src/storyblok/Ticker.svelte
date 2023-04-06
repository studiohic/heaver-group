<script>
  import Marquee from "svelte-fast-marquee";
  let play = true;
  import { renderRichText } from "@storyblok/svelte";
  export let blok;
  $: headlineText = renderRichText(blok.headline);
</script>

<section class="bg-white pt-8 pb-8">
  <Marquee pauseOnHover={true} speed={blok.speed} direction="right" {play}>
    {#each Array(blok.repeat - 0) as _}
      <div class="mx-12 overflow-hidden text-2xl font-light">
        {#if blok.link.cached_url}
          <a href={blok.link.cached_url}> {@html headlineText}</a>
        {:else}
          {@html headlineText}
        {/if}
      </div>
    {/each}
  </Marquee>
</section>
