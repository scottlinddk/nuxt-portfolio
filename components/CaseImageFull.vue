<template>
  <section class="w-screen">
    <nuxt-img class="w-full" :src="selectedProject.acf.caseimage.sizes.large" />
  </section>
</template>

<script>
export default {
  name: "CaseImageFull",
  props: {
    selectedProject: {
      type: Object,
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>