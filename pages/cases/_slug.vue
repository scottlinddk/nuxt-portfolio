<template>
  <main v-if="selectedProject && dataReady" class="my-5">
    <CasesCaseHero :selected-project="selectedProject" />
    <CasesCaseImageFull :selected-project="selectedProject" />
    <CasesCaseArticle
      :article-label="selectedProject.acf.first_label"
      :article-heading="selectedProject.acf.first_heading"
      :article-section="selectedProject.acf.first_section"
    />
    <CasesCaseImages
      :first-image="selectedProject.acf.case_images.first_image.sizes.large"
      :second-image="selectedProject.acf.case_images.second_image.sizes.large"
      :third-image="selectedProject.acf.case_images.third_image.sizes.large"
    />
    <CasesCaseArticle
      :article-label="selectedProject.acf.second_label"
      :article-heading="selectedProject.acf.second_heading"
      :article-section="selectedProject.acf.second_section"
    />
  </main>
</template>

<script>
export default {
  name: "case",
  data() {
    return {
      dataReady: false,
      cases: [],
      casesAPI: 'wp/v2/cases/',
      errors: [],
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.cases = await response.data;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
  computed: {
    selectedProject() {
      return this.cases.find(
        (project) => project.slug == this.$route.params.slug
      );
    },
  },
};
</script>
<style>
</style>