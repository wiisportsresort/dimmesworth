<script lang="ts">
  import AppBar from '$lib/AppBar.svelte';
  import Footer from '$lib/Footer.svelte';
  import '../app.postcss';
</script>

<AppBar />
<main class="mt-24 font-sans text-gray-200 dark">
  <slot />
</main>
<Footer />
