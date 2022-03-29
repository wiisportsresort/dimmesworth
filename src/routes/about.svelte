<script lang="ts">
  import Link from '$lib/Link.svelte'
  import { fade } from 'svelte/transition'
</script>

<svelte:head>
  <title>About - Chirp</title>
</svelte:head>

<div in:fade={{ duration: 100 }} id="about">
  <h1 class="mb-4 text-6xl text-center font-display tracking-tight">About</h1>

  <p>
    This school project, <strong>Chirp</strong>, is a mock social media website in
    <i>The Scarlet Letter</i> universe, modeled after Twitter, Reddit, and the like. Users can make
    <strong>posts</strong>
    and
    <strong>comments</strong> in reply.
  </p>

  <br />

  <p>
    You can start on the <Link href="/">Home</Link> page and look through the list of latest posts there.
    Clicking on one will bring you to the posts's unique page (at <code>/post/&lt;id&gt;</code>),
    where you can view its comments.
  </p>

  <br />

  <p>
    Clicking on a profile image or the username on a post will bring you to their page (at <code
      >/user/&lt;username&gt;</code
    >). You can view their bio, followers/folowees, join date, posts, comments, and media posts
    there.
  </p>

  <br />

  <p>
    The source code is available at <Link href="https://github.com/wiisportsresort/dimmesworth"
      >GitHub</Link
    >.
  </p>
</div>

<style lang="postcss">
  #about {
    margin: 0 auto;
    flex-grow: 1;
    max-width: 700px;
  }
</style>
