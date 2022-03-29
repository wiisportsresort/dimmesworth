<script lang="ts">
  import type { IconName } from './Icon';
  import Icon from './Icon.svelte';

  export let size: number = 40;
  export let icon: IconName;
  export let iconSize: number = 18;
</script>

<button
  style={`width: ${size}px; height: ${size}px;`}
  class="border-none bg-transparent rounded-full p-0 transition-colors duration-75 ease-linear hover:bg-[#0000000f] flex items-center justify-center cursor-pointer"
>
  <Icon {icon} attrs={{ width: iconSize, height: iconSize }} />
</button>
