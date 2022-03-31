<script lang="ts" context="module">
  export const load: Load = async ({ params }) => {
    const user = hydrator.getUser(params.username)

    if (user) return { props: { user } }
    else
      return {
        // status: 404,
        // error: new Error(`User ${params.username} not found`),
        status: 301,
        redirect: '/',
      }
  }
</script>

<script lang="ts">
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  import { hydrator } from '$lib/Hydrator'
  import IconButton from '$lib/IconButton.svelte'
  import type { User } from '$lib/User'
  import { formatUserContent } from '$lib/util'
  import type { Load } from '@sveltejs/kit'
  import { format } from 'date-fns'
  import { fade } from 'svelte/transition'

  export let user: User

  let profileImage = user?.profileImage ?? { type: 'image', src: '/img/profile/[default].png' }

  $: pathSegment = $page.url.pathname.split('/').reverse()[0]

  const setDefaultProfileImage = () =>
    (profileImage = { type: 'image', src: '/img/profile/[default].png' })
</script>

<svelte:head>
  <title>@{user.username} - Chirp</title>
</svelte:head>

<div
  in:fade={{ duration: 100 }}
  id="user-wrapper"
  class="flex flex-col items-center lg:items-start lg:max-w-6xl md:max-w-5xl lg:content-between lg:mx-auto lg:flex-row"
>
  {#if browser && window.history.length > 1}
    <div id="back-button-wrapper" class="flex lg:w-min w-[42rem]">
      <div on:click={() => window.history.back()}>
        <IconButton icon="arrow-left" size={32} iconSize={20} />
      </div>
      <div class="flex-1" />
    </div>
  {/if}
  <aside
    class="flex flex-row items-center content-between flex-grow-0 w-full max-w-2xl lg:w-auto lg:flex-col"
  >
    <div class="flex items-center w-44 lg:w-auto">
      <img
        src={profileImage.src}
        on:error={setDefaultProfileImage}
        alt="profile"
        class="w-32 h-32 lg:w-64 lg:h-64 lg:max-w-[260px] border-2 border-bluegray-500 rounded-full object-cover"
      />
    </div>
    <div
      id="aside-content"
      class="ml-4 lg:ml-0 max-h-40 mt-2 w-full lg:max-h-[unset] lg:max-w-[256px]"
    >
      <h1 class="mt-0 mb-1 text-3xl font-display">{user.displayName}</h1>
      <span class="block mb-2 text-base text-gray-400">@{user.username}</span>
      <span class="block mb-2 bio">{@html formatUserContent(user.bio)}</span>
      <div id="interactions" class="flex">
        <a
          sveltekit:prefetch
          href={`/user/${user.username}/followers`}
          class="text-bluegray-400 no-underline mr-[6px] hover:underline"
        >
          <b class="text-bluegray-300">{user.followers?.length}</b>
          Followers
        </a>
        <a
          sveltekit:prefetch
          href={`/user/${user.username}/following`}
          class="text-bluegray-400 no-underline mr-[6px] hover:underline"
        >
          <b class="text-bluegray-300">{user.following?.length}</b>
          Following
        </a>
      </div>

      <span class="block mt-2 text-bluegray-400">
        Joined <b class="text-bluegray-300">{format(user.joinDate, 'MMMM yyy')}</b>
      </span>
    </div>
  </aside>
  <section class="flex-grow w-full lg:max-w-4xl max-w-2xl mt-4 lg:ml-8 lg:mt-0">
    <nav class="flex h-10 tab-list">
      <a
        sveltekit:prefetch
        class="rounded-l tab-item"
        class:selected={pathSegment === 'posts'}
        href={`/user/${user.username}/posts`}>Posts</a
      >
      <a
        sveltekit:prefetch
        class="tab-item"
        class:selected={pathSegment === 'posts_and_comments'}
        href={`/user/${user.username}/posts_and_comments`}>Posts and comments</a
      >
      <!-- <a
        sveltekit:prefetch
        class="rounded-r tab-item"
        class:selected={pathSegment === 'media'}
        href={`/user/${user.username}/media`}>Media</a
      > -->
    </nav>
    <div in:fade={{ duration: 100 }} class="mt-3">
      <slot />
    </div>
  </section>
</div>

<style lang="postcss">
  :global(#user-wrapper a) {
    @apply text-blue-400 no-underline transition-colors duration-75;

    &:hover {
      @apply underline;
    }
  }

  .tab-item {
    @apply flex-1 no-underline flex text-bluegray-200 items-center justify-center pt-1 border-b-2 border-bluegray-800 bg-bluegray-800 transition-colors duration-75 hover:bg-blue-200 hover:border-blue-200;

    &:hover {
      @apply bg-bluegray-600 border-bluegray-600;
    }
    &.selected {
      @apply border-blue-500 font-semibold;
    }
  }
</style>
