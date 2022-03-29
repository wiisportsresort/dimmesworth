<script lang="ts">
  export let href: string;
  export let ext = false;
</script>

<a
  class="text-blue-500 no-underline transition-colors hover:text-blue-700"
  {href}
  target={ext ? '_blank' : undefined}
  rel={ext ? 'noreferrer' : undefined}><slot /></a
>
