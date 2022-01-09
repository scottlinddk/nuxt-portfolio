<template>
  <section id="content" class="px-4 mx-auto max-w-7xl">
    <h2
      class="
        text-gray-900 text-center
        mb-6
        text-2xl
        font-bold
        tracking-tight
        sm:text-3xl
      "
    >
      {{ wpObj.title.rendered }}
    </h2>
    <article
      class="mx-auto max-w-prose"
      v-html="wpObj.content.rendered"
    ></article>
  </section>
</template>

<script>
export default {
  name: "Content",
  props: {
    wpObj: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
