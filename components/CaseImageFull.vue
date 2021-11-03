<template>
  <section class="w-screen">
    <nuxt-img class="w-full rounded-3xl" :src="selectedProject.acf.caseimage.sizes.large" />
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