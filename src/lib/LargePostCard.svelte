<script lang="ts">
  import { format } from 'date-fns'
  import type { Post } from './Post'
  import type { PostCardType } from './PostCard.svelte'
  import { formatUserContent } from './util'

  export let post: Post
  // export let interactive: InteractivityType = undefined;
  export let type: PostCardType = undefined
  export let showParent = true

  $: linkedTop = type === 'linked-top' || type === 'linked-full'
  $: linkedBottom = type === 'linked-bottom' || type === 'linked-full'

  const countComments = (post: Post): number => {
    let num = 0

    num += post.comments
      ? post.comments.length + (post.comments?.map(countComments).reduce((a, b) => a + b, 0) ?? 0)
      : 0

    return num
  }

  $: commentCount = countComments(post)
</script>

<div
  class="large-post-card p-3 border-2  border-bluegray-500 bg-bluegray-600 rounded shadow-md {linkedTop
    ? 'rounded-t-none border-t-0'
    : ''} {linkedBottom ? 'rounded-b-none border-b-0' : ''}"
  class:is-reply={showParent && !!post.parent}
>
  <header class="flex items-center mb-2">
    <a sveltekit:prefetch href="/user/{post.author.username}/posts" class="flex">
      <aside class="relative flex flex-col mr-2">
        {#if type === 'linked-top' || type === 'linked-full'}
          <div
            class="link link-top absolute left-[calc(50%-1px)] w-[2px] z-0 bg-bluegray-500 -top-7 h-7"
          />
        {/if}
        <img
          class="w-12 h-12 object-cover border-2 border-bluegray-500 rounded-full transition-all duration-75 z-10 hover:cursor-pointer hover:bg-[#0000000f]"
          src={post.author?.profileImage?.src ?? '/img/profile/[default].png'}
          alt="profile"
        />
      </aside>
      <aside class="flex flex-row">
        <a sveltekit:prefetch href="/user/{post.author.username}/posts">
          <span class="block mb-1 text-gray-200 header hover:cursor-pointer hover:underline">
            <b>{post.author?.displayName}</b>
          </span>
          <span class="block text-gray-400 gray hover:cursor-pointer hover:underline"
            >@{post.author?.username}</span
          >
        </a>
      </aside>
    </a>
  </header>
  <div class="flex flex-col flex-1 body">
    {#if showParent && post.parent}
      <a
        sveltekit:prefetch
        class="hover:underline hover:cursor-pointer text-[0.95rem] w-[fit-content] text-bluegray-400"
        href="/post/{post.parent.id}"
      >
        Replying to
        <strong class="font-semibold text-bluegray-300">@{post.parent.author?.username}</strong>
      </a>
    {/if}
    <span class="block mt-1.5 text-2xl content">{@html formatUserContent(post.content)}</span>
    {#if post.media.length}
      <div class="flex flex-wrap items-start content-start ml-1">
        {#each post.media as media, index}
          {#if media.type === 'image'}
            <div class="rounded relative border-[1px] border-bluegray-300">
              <img src={media.src} alt="attachment {index}" class="max-w-full rounded" />
              {#if media.caption}
                <span
                  class="absolute bottom-0 left-0 w-full px-1 py-2 text-center text-white rounded-b bg-bluegray-600/50"
                  >{@html media.caption}</span
                >
              {/if}
            </div>
          {:else}
            <span>Unknown media type: {media.type} (src: {media.src})</span>
          {/if}
        {/each}
      </div>
    {/if}
    {#if $$slots.default}
      <div>
        <hr class="mt-2 w-full border-b-[1px] border-bluegray-500" />
        <slot />
      </div>
    {/if}
    <hr class="mt-2 w-full border-b-[1px] border-bluegray-500" />
    <div class="flex items-center mt-3 interactions text-bluegray-300">
      <span class="likes">
        <strong>{post.likes.toLocaleString()}</strong>
        points
      </span>
      <span class="comments">
        <strong>{commentCount.toLocaleString()}</strong>
        comment{commentCount === 1 ? '' : 's'}
      </span>
      <span class="timestamp selection:text-coolgray-400">
        {format(post.timestamp, 'MMM d, yyy')}&nbsp;·&nbsp;{format(post.timestamp, 'h:mm:ss a')}
      </span>
    </div>
  </div>
</div>

<style lang="postcss">
  .large-post-card {
    :global(.content a) {
      @apply text-blue-400 no-underline transition-colors duration-75;

      &:hover {
        @apply underline;
      }
    }

    .interactions {
      & > * {
        margin-right: 1rem;

        display: flex;
        align-items: center;
        & > :global(*) {
          margin-right: 0.25rem;
        }
      }
    }
  }
</style>
