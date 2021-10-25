<template>
  <article class="px-4 py-20 mx-auto max-w-7xl">
    <div class="w-full mx-auto mb-12 text-center md:w-2/3">
      <h2
        class="mb-3 text-3xl font-bold text-gray-900"
        itemprop="headline"
        :title="articleHeading"
      >
        {{ articleHeading }}
      </h2>
      <p class="text-left prose leading-relaxed">
        {{ articleSection }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "CaseArticle",
  components: {},
  props: {
    articleLabel: String,
    articleHeading: String,
    articleSection: String,
  }
}
</script>

<style scoped>
</style>