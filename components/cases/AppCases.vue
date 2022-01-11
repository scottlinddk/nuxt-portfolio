<template>
<article class="flex items-end w-2/3 mx-auto flex-wrap justify-center space-x-6 md:space-x-6">
<CasesAppCase v-for="project in highlightedProjects" :key="project.id" 
  :slug="project.slug"
  :title="project.title.rendered" 
  :subheading="project.acf.subheading"
  :case-image="project.acf.caseimage.sizes.medium"
  />
</article>
</template>

<script>
export default {
  name: "AppCasesFlex",
  data() {
    return {
      dataReady: false,
      projects: null,
      highlightedProjects: null,
      projectsArr: [],
      casesAPI: 'wp/v2/cases/',
      errors: [],
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.projects = response.data;
      this.highlightedProjects = this.projects.filter(
        (project) => project.acf.highlighted == true
      );
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
