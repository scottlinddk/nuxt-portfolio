<template>
  <section v-if="dataReady">
    <div class="flex md:flex-row flex-col justify-center items-center">
      <div class="mt-4 relative relative-20 mt-0 col-start-1">
        <div class="relative space-y-2 md:space-y-6">
          <div class="flex items-end justify-start space-x-2 md:space-x-6">
            <NuxtLink :to="'/cases/' + highlightedProjects[0].slug">
            <img
              width="200"
              :src="highlightedProjects[0].acf.caseimage.sizes.medium"
              :alt="'Billede for case: ' + highlightedProjects[0].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-46
                sm:w-56
                md:w-96
                transition
                duration-700
                ease-in-out
                transform
                hover:scale-105 hover:shadow-xl
              "
            />
            </NuxtLinK>
            <NuxtLink :to="'/cases/' + highlightedProjects[1].slug">
            <img
              width="200"
              :src="highlightedProjects[1].acf.caseimage.sizes.medium"
              :alt="'Billede for case: ' + highlightedProjects[1].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-46
                sm:w-56
                md:w-96
                transition
                duration-700
                ease-in-out
                transform
                hover:scale-105 hover:shadow-xl
              "
            />
            </NuxtLink>
          </div>
          <div
            class="
              flex
              items-start
              justify-center
              lg:justify-start
              space-x-2
              md:space-x-6
              md:ml-12
            "
          >
          <NuxtLink :to="'/cases/' + highlightedProjects[2].slug">
            <img
              width="200"
              :src="highlightedProjects[2].acf.caseimage.sizes.medium"
              :alt="'Billede for case: ' + highlightedProjects[2].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-46
                sm:w-56
                md:w-96
                transition
                duration-700
                ease-in-out
                transform
                hover:scale-105 hover:shadow-xl
              "
            />
            </NuxtLink>
            <NuxtLink :to="'/cases/' + highlightedProjects[3].slug">
            <img
              width="200"
              :src="highlightedProjects[3].acf.caseimage.sizes.medium"
              :alt="'Billede for case: ' + highlightedProjects[3].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-46
                sm:w-56
                md:w-96
                transition
                duration-700
                ease-in-out
                transform
                hover:scale-105 hover:shadow-xl
              "
            />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      casesAPI: process.env.CASES,
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.projects = response.data;
      this.highlightedProjects = this.projects.filter(
        (project) => project.acf.highlighted == true
      );
      console.log(this.highlightedProjects);
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style scoped>
</style>
