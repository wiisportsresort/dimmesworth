<script lang="ts">
  import type { User } from './User'
  import { formatUserContent } from './util'

  export let user: User
  export let interactive = false

  // const userInteractive = (node: HTMLElement, user: User, ...rest: any[]) => {
  //   if (interactive) {
  //     node.classList.add('interactive');
  //     node.addEventListener('click', () => push(`#/user/${user!.username}`));
  //   }
  // };
</script>

<a
  sveltekit:prefetch
  class="rounded shadow-md relative cursor-pointer post-card hover:bg-bluegray-700 border-bluegray-500 bg-bluegray-600 interactive flex p-3 border-2"
  href="/user/{user.username}"
>
  <div class="image-col" class:interactive>
    <img
      class="z-10 object-cover w-12 h-12 transition-all duration-75 border-2 rounded-full border-bluegray-500"
      src={user.profileImage?.src ?? '/img/profile/[default].png'}
      alt="profile"
    />
  </div>
  <div class="body flex-col flex ml-3 items-start justify-center text-gray-300 no-underline">
    <span class="header" class:interactive>
      <b>{user?.displayName}</b>
      <span class="username">@{user?.username}</span>
    </span>
    {#if !!user.bio}
      <span class="content">{@html formatUserContent(user.bio)}</span>
    {/if}
    {#if $$slots.default}
      <hr />
      <slot />
    {/if}
  </div>
</a>
