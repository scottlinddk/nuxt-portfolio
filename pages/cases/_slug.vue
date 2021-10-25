<template>
  <main v-if="selectedProject && dataReady" class="my-5">
    <section
      class="
        px-8
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <article class="lg:pr-10 self-center">
          <h1 class="mb-4 text-3xl font-extrabold leading-none">
            {{ selectedProject.title.rendered }}
          </h1>
          <p class="mb-6 text-gray-900">
            {{ selectedProject.acf.subheading }}
          </p>
          <hr class="mb-5 border-gray-300" />
        </article>
        <article class="flex space-between flex-wrap p-6 overflow-hidden rounded-lg m-w5xl bg-gray-100 shadow-2xl">
          <img
            class="object-cover w-full h-36 mb-6"
            :src="selectedProject.acf.image"
            :alt="selectedProject.acf.title"
          />
          <p>
            {{selectedProject.acf.meta_description}}
          </p>
          <div class="grid grid-cols-2 gap-6 mt-6 w-full">
            <div class="inline-flex flex-col h-12">
              <strong>{{selectedProject.acf.meta_info.headings.first}}</strong>
              <span>{{selectedProject.acf.meta_info.descriptions.first}}</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>{{selectedProject.acf.meta_info.headings.second}}</strong>
              <span>{{selectedProject.acf.meta_info.descriptions.second}}</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>{{selectedProject.acf.meta_info.headings.third}}</strong>
              <span>{{selectedProject.acf.meta_info.descriptions.third}}</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>{{selectedProject.acf.meta_info.headings.fourth}}</strong>
              <span>{{selectedProject.acf.meta_info.descriptions.fourth}}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="w-screen">
    <img class="w-full" :src="selectedProject.acf.caseimage" />
    </section>
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