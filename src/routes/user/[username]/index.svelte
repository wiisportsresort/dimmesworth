<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ url }) => ({
    status: 301,
    redirect: url.pathname + '/posts',
  })
</script>
