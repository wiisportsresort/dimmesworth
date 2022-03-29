<script lang="ts">
</script>

<nav
  class="fixed top-0 z-50 flex items-center w-full h-20 p-4 align-middle shadow-lg bg-bluegray-600"
>
  <a
    href="/"
    class="flex items-center no-underline align-middle transition-colors duration-75 ease-linear"
  >
    <img src="/img/logo/egg-white.png" class="w-7 mr-1" alt="chirp logo" />
    <span class="m-0 ml-2 text-2xl font-bold text-gray-200 font-sans">Chirp</span>
  </a>

  <a
    sveltekit:prefetch
    class="m-0 font-sans text-gray-200 ml-6 text-lg mt-[1px] no-underline flex align-middle items-center justify-center hover:font-medium"
    href="/about"
  >
    <span class="h-full">About</span>
  </a>
</nav>
