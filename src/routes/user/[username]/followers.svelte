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
  import { page } from '$app/stores'
  import { hydrator } from '$lib/Hydrator'
  import type { User } from '$lib/User'
  import UserCard from '$lib/UserCard.svelte'
  import type { Load } from '@sveltejs/kit'
  import { fade } from 'svelte/transition'

  export let user: User
</script>

<div in:fade={{ duration: 100 }}>
  <div id="following">
    {#if user}
      <header>
        <!-- <div id="back-button-wrapper">
          <div on:click={pop}>
            <IconButton icon="arrow-left" size={32} iconSize={20} />
          </div>
        </div> -->
        <span><b>@{user.username}</b>'s followers</span>
      </header>
      {#if user.followers?.length}
        {#each user.followers as follower}
          <UserCard user={follower} interactive />
          <div class="h-3" />
        {/each}
      {:else}
        <h2>No followers</h2>
      {/if}
    {:else}
      <h3>User not found: @{$page.params.username}</h3>
    {/if}
  </div>
</div>

<style lang="postcss">
  #following {
    max-width: 600px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
</style>
