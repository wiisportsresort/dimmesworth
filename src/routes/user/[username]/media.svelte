<script lang="ts" context="module">
  export const load: Load = async ({ params }) => {
    const user = hydrator.getUser(params.username)

    if (user) return { props: { user } }
    else
      return {
        status: 404,
        error: new Error(`User ${params.username} not found`),
      }
  }
</script>

<script lang="ts">
  import { hydrator } from '$lib/Hydrator'
  import PostCard from '$lib/PostCard.svelte'
  import type { User } from '$lib/User'
  import type { Load } from '@sveltejs/kit'

  export let user: User
</script>

{#if user.posts.some((p) => p.media.length)}
  {#each [...user.posts]
    .filter((p) => p.media.length)
    .sort(({ timestamp: a }, { timestamp: b }) => b.getTime() - a.getTime()) as post}
    <div class="mb-3">
      <PostCard {post} interactive="full" />
    </div>
  {/each}
{:else}
  <h3 class="mt-6 text-xl font-semibold text-center">No media posts found.</h3>
{/if}
