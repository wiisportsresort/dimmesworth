<script lang="ts">
  import { hydrator } from '$lib/Hydrator'
  import PostCard from '$lib/PostCard.svelte'
  import { fade } from 'svelte/transition'
</script>

<svelte:head>
  <title>Chirp</title>
</svelte:head>

<div in:fade={{ duration: 100 }} class="flex flex-col items-center flex-1 max-w-3xl mx-auto">
  <h1 class="mt-0 mb-8 text-6xl font-sans tracking-tight flex items-center">
    <img src="/img/logo/egg-white.png" class="w-12 mr-4 mt-2" alt="chirp logo" />
    <span>Chirp</span>
  </h1>
  <div class="w-[48rem] posts">
    {#each [...hydrator.posts]
      .filter((p) => !p.parent)
      .sort(({ timestamp: a }, { timestamp: b }) => b.getTime() - a.getTime()) as post}
      <div class="mb-3">
        <PostCard {post} interactive="full" showShowRepliesMessage />
      </div>
    {/each}
  </div>
</div>
