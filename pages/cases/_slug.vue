<template>
  <main v-if="selectedProject && dataReady" class="my-5">
    <CaseHero :selected-project="selectedProject" />
    <CaseImageFull :selected-project="selectedProject" />
    <CaseArticle
      :article-label="selectedProject.acf.first_label"
      :article-heading="selectedProject.acf.first_heading"
      :article-section="selectedProject.acf.first_section"
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
      casesAPI: process.env.CASES,
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.cases = await response.data;
      this.dataReady = true;
      console.log(this.cases);
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