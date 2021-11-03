<template>
  <NuxtLink
    class="
      block
      max-w-md max-h-xl
      m-2
      overflow-hidden
      shadow-xl
      rounded-2xl
      transition
      duration-700
      ease-in-out
      transform
      hover:scale-105 hover:shadow-xl
    "
    :to="'/cases/' + slug"
  >
    <img
      class="object-cover w-full h-64"
      :src="caseImage"
      :alt="'Case: ' + title"
    />
    <div class="relative w-full p-6 -mt-8 bg-white rounded-2xl">
      <h5 class="text-xl font-bold text-gray-900">
        {{ title }}
      </h5>
      <div class="hidden mt-2 text-gray-500 sm:block">
        <p>{{ subheading }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "AppCase",
  props: {
    title: String,
    slug: String,
    subheading: String,
    caseImage: String,
  },
};
</script>
