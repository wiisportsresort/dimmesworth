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
  import type { User } from '$lib/User'
  import UserCard from '$lib/UserCard.svelte'
  import type { Load } from '@sveltejs/kit'
  import { fade } from 'svelte/transition'

  export let user: User
</script>

<div in:fade={{ duration: 100 }}>
  <header class="flex items-center mb-1">
    <div class="mr-1">
      <!-- <div on:click={}>
        <IconButton icon="arrow-left" size={32} iconSize={20} />
      </div> -->

      <span>Followed by <b>@{user.username}</b></span>
    </div>
  </header>

  {#if user.following?.length}
    {#each user.following as followee}
      <UserCard user={followee} interactive />
    {/each}
  {:else}
    <h2>Not following anyone</h2>
  {/if}
</div>
