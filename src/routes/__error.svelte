<script context="module" lang="ts">
  export const load: Load = async ({}) => {
    return {
      redirect: '/',
    }
  }
</script>

<script lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { fade } from 'svelte/transition'
</script>

<div in:fade={{ duration: 100 }} class="flex justify-center">
  <section class="flex flex-col items-center" />
</div>
