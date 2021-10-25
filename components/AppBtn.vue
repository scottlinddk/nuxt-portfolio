<template>
  <div class="text-center">
    <NuxtLink
      class="
        mx-auto
        inline-flex
        items-center
        justify-center
        h-12
        my-6
        px-6
        font-medium
        tracking-wide
        text-white
        transition
        duration-200
        rounded
        shadow-md
        bg-green-500
        hover:bg-green-400 hover:shadow-xl
        focus:shadow-outline focus:outline-none
      "
      :to="'/' + link"
      >{{text}}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "AppBtn",
  props: {
          text: String,
          link: String
  },
};
</script>

<style>
</style>