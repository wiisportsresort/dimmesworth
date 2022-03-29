<script lang="ts" context="module">
  export const load: Load = async ({ params }) => {
    const post = hydrator.getPost(params.id)

    if (post) return { props: { currentPost: post } }
    else
      return {
        status: 404,
        error: new Error(`Post ${params.id} not found`),
      }
  }
</script>

<script lang="ts">
  import { hydrator } from '$lib/Hydrator'
  import IconButton from '$lib/IconButton.svelte'
  import LargePostCard from '$lib/LargePostCard.svelte'
  import type { Post } from '$lib/Post'
  import type { PostCardType } from '$lib/PostCard.svelte'
  import PostCard from '$lib/PostCard.svelte'
  import { assert } from '$lib/util'
  import type { Load } from '@sveltejs/kit'
  import { fade } from 'svelte/transition'

  export let currentPost: Post

  const getParents = (...chain: Post[]): Post[] => {
    return chain[0].parent ? getParents(chain[0].parent, ...chain) : chain
  }

  $: postChain = getParents(currentPost)

  const getPostCardType = (post: Post): PostCardType => {
    if (postChain.length === 1) return undefined
    return postChain.indexOf(post) === 0
      ? 'linked-bottom'
      : postChain.indexOf(post) !== assert(postChain.length) - 1
      ? 'linked-full'
      : 'linked-top'
  }

  const isCurrent = (post: Post) => post.id === assert(currentPost).id
</script>

{#key currentPost}
  <div in:fade={{ duration: 100 }}>
    <div id="post">
      <header>
        {#if window.history.length > 1}
          <div id="back-button-wrapper">
            <div on:click={() => window.history.back()}>
              <IconButton icon="arrow-left" size={32} iconSize={20} />
            </div>
          </div>
        {/if}
        <span class="text-lg font-display"
          >{!currentPost.parent ? 'Post' : 'Comment'} by
          <b class="font-sans">@{currentPost.author?.username}</b></span
        >
      </header>
      <section id="posts">
        {#each assert(postChain) as post}
          <svelte:component
            this={isCurrent(post) ? LargePostCard : PostCard}
            {post}
            showParent={isCurrent(post)}
            interactive={isCurrent(post) ? 'header' : 'full'}
            type={getPostCardType(post)}
          />
        {/each}
      </section>
      {#if currentPost.comments?.length}
        <h3 class="mt-4 mb-1 text-2xl font-display">Comments</h3>
        <section id="comments">
          {#each [...currentPost.comments].sort(({ timestamp: a }, { timestamp: b }) => a.getTime() - b.getTime()) as comment}
            <PostCard
              post={comment}
              showParent
              interactive="full"
              type={comment.comments?.length ? 'linked-bottom' : undefined}
            />
            {#if comment.comments?.length}
              <PostCard
                post={comment.comments[0]}
                showParent={false}
                interactive="full"
                type={comment.comments[0]?.comments?.length ? 'linked-full' : 'linked-top'}
              />
              {#if comment.comments[0].comments?.length}
                <PostCard
                  post={comment.comments[0].comments[0]}
                  showShowRepliesMessage={!!comment.comments[0].comments[0].comments?.length}
                  showParent={false}
                  interactive="full"
                  type="linked-top"
                />
              {/if}
            {/if}
            <div class="h-4" />
          {/each}
        </section>
      {/if}
    </div>
  </div>
{/key}

<style lang="postcss">
  #post {
    max-width: 700px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
  }
</style>
