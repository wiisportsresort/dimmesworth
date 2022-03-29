<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 100 }} class="flex justify-center">
  <section class="flex flex-col items-center">
    <h2>Not Found</h2>
    <h3>Nice job, <a href="/">return to home</a>?</h3>
  </section>
</div>
