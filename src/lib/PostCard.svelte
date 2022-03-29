<script context="module" lang="ts">
  export type PostCardType = 'linked-top' | 'linked-bottom' | 'linked-full' | undefined
  export type InteractivityType = 'header' | 'full' | undefined
</script>

<script lang="ts">
  import { goto } from '$app/navigation'
  import type { Post } from '$lib/Post'
  import { format } from 'date-fns'
  import Icon from './Icon.svelte'
  import type { User } from './User'
  import { assert, formatUserContent } from './util'

  export let post: Post
  export let interactive: InteractivityType = undefined
  export let type: PostCardType = undefined
  export let showParent = true
  export let showShowRepliesMessage = false

  $: linkedTop = type === 'linked-top' || type === 'linked-full'
  $: linkedBottom = type === 'linked-bottom' || type === 'linked-full'

  const headerInteractive = (node: HTMLElement, user: User, ...rest: any[]) => {
    if (!!interactive) {
      node.classList.add('interactive')
      node.addEventListener('click', () => goto(`/user/${user!.username}`))
    }
  }

  const fullInteractive = (node: HTMLElement, post: Post, ...rest: any[]) => {
    if (interactive === 'full') {
      node.classList.add('interactive')
      node.addEventListener('click', () => goto(`/post/${post.id}`))
    }
  }

  const countComments = (post: Post): number => {
    let num = 0

    num += post.comments
      ? post.comments.length + (post.comments?.map(countComments).reduce((a, b) => a + b, 0) ?? 0)
      : 0

    return num
  }
</script>

<div
  class="p-3 border-2 rounded shadow-md cursor-pointer post-card hover:bg-bluegray-700 border-bluegray-500 bg-bluegray-600 flex relative {linkedTop
    ? 'rounded-t-none border-t-0'
    : ''} {linkedBottom ? 'rounded-b-none shadow-none border-b-0' : ''}"
  class:interactive={interactive === 'full'}
  class:is-reply={showParent && !!post.parent}
  class:linked-top={linkedTop}
  class:linked-bottom={linkedBottom}
>
  <div class="post-background" use:fullInteractive={post} />
  <div class="image-col" use:headerInteractive={assert(post.author)}>
    {#if linkedTop}
      <div
        class="link link-top absolute left-[calc(50%-1px)] w-[2px] z-0 bg-bluegray-500 -top-7 h-7"
      />
    {/if}
    <img
      src={post.author?.profileImage?.src ?? '/img/profile/[default].png'}
      alt="profile"
      class="z-10 object-cover w-12 h-12 transition-all duration-75 border-2 rounded-full border-bluegray-500"
    />
    {#if linkedBottom}
      <div
        class="link link-bottom absolute left-[calc(50%-1px)] w-[2px] z-0 bg-bluegray-500 top-12 -bottom-2"
      />
    {/if}
  </div>
  <div class="body">
    <div class="post-background" use:fullInteractive={post} />
    {#if showParent && post.parent}
      <span class="-mt-1 text-sm w-max text-bluegray-400" use:fullInteractive={assert(post.parent)}>
        Replying to
        <strong class="font-semibold text-bluegray-300">@{post.parent.author?.username}</strong>
      </span>
    {/if}
    <span class="header">
      <div class="username" use:headerInteractive={assert(post.author)}>
        <b>{post.author?.displayName}</b>
        <span class="text-gray-400">@{post.author?.username}</span>
      </div>
      <span class="text-gray-400"> &nbsp;·&nbsp; </span>
      <span class="text-gray-400">{format(post.timestamp, 'MMM d, yyy')}</span>
    </span>
    <span class="content" use:fullInteractive={post}>{@html formatUserContent(post.content)}</span>
    {#if post.media.length}
      <span class="text-gray-400 media-preview">
        <i>{post.media.length} attachment{post.media.length === 1 ? '' : 's'}</i>
      </span>
    {/if}
    {#if $$slots.default}
      <div>
        <hr />
        <slot />
      </div>
    {/if}
    <div class="flex items-center text-gray-400 interactions" use:fullInteractive={post}>
      <span class="likes">
        <Icon icon="arrow-up" />
        <span>{post.likes.toLocaleString()}</span>
        <Icon icon="arrow-down" />
      </span>
      <span class="comments" use:fullInteractive={post}>
        <Icon icon="message-square" />
        <span>{countComments(post).toLocaleString()}</span>
        {#if showShowRepliesMessage}
          <span class="ml-2">Click to show replies</span>
        {/if}
      </span>
    </div>
  </div>
</div>

<style lang="postcss">
  .post-card {
    &.is-reply > .image-col {
      margin-top: 1.25rem;
    }
    transition: background-color 75ms linear;

    .image-col {
      position: relative;
      width: 3rem;
      display: flex;
      flex-direction: column;
      margin-right: 0.5rem;

      &.interactive img:hover {
        cursor: pointer;
        background-color: #0000000f;
        filter: brightness(90%);
      }
    }

    & > * {
      z-index: 1;
    }

    .body {
      position: relative;
      & > * {
        z-index: 1;
      }
    }

    .post-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    :global(.parent.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .header {
      display: block;
      width: fit-content;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
    }

    :global(.username.interactive):hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      .content {
        margin-bottom: 0.25rem;
        display: block;

        :global(&.interactive):hover {
          cursor: pointer;
        }
      }

      :global(.content a) {
        @apply text-blue-400 no-underline transition-colors duration-75;

        &:hover {
          @apply underline;
        }
      }

      .media-preview {
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        display: block;
      }

      .interactions {
        & > * {
          margin-right: 1rem;
          display: flex;
          align-items: center;
          & > :global(*) {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
</style>
