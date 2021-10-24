<template>
  <!-- <section class="mx-auto md:px-24 overflow-hidden sm:p-2 md:p-10">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 px-6">
      <h2
        class="
          mx-auto
          mb-5
          text-3xl
          font-bold
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-none
          md:mb-6
          group
        "
      >
        Tag et kig på nogle udvalgte cases:
      </h2>
    </div>
    <div id="grid-container" class="grid-container h-full mx-auto px-6">
      <router-link
        v-for="project in projects || []"
        :key="project.id"
        :to="'/projekter/' + project.slug"
        :aria-label="'Se projektet om ' + project.title.rendered"
        class="
          bg-green-500
          rounded-2xl
          flex
          shadow-lg
          justify-center
          items-center
          text-white text-2xl
          font-extrabold
          transition
          duration-700
          ease-in-out
          transform
          hover:scale-105 hover:shadow-xl
        "
      >
        <article>
          <p>
            {{ project.title.rendered }}
          </p>
        </article>
      </router-link>
    </div>
  </section> -->
  <section v-if="dataReady">
    <!-- <div class="lg:flex-grow md:w-1/2 my-12 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
    <h1 class="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">Welcome to FoodAdvisor 🍕</h1>
    <p class="px-2 leading-relaxed">FoodAdvisor is a Strapi + Next.js demo app listing restaurants around the world.</p>
    </div> -->
    <div class="flex md:flex-row flex-col justify-center items-center">
      <div class="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
        <div class="relative space-y-2 md:space-y-6">
          <div class="flex items-end justify-center lg:justify-start space-x-2 md:space-x-6">
            <NuxtLink :to="'/cases/' + highlightedProjects[0].slug">
            <img
              width="200"
              :src="highlightedProjects[0].acf.caseimage"
              :alt="'Billede for case: ' + highlightedProjects[0].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-36
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
              :src="highlightedProjects[1].acf.caseimage"
              :alt="'Billede for case: ' + highlightedProjects[1].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-36
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
              :src="highlightedProjects[2].acf.caseimage"
              :alt="'Billede for case: ' + highlightedProjects[2].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-36
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
              :src="highlightedProjects[3].acf.caseimage"
              :alt="'Billede for case: ' + highlightedProjects[3].acf.heading"
              class="
                rounded-lg
                shadow-lg
                w-36
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
.grid-container {
  display: grid;
  grid-template-columns: 1;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 2em;
}
.grid-container a {
  grid-column: span 2;
  grid-row: span 8;
  background-image: linear-gradient(57deg, #5ed1af, #19b3bd);
}
.grid-container a:nth-child(2n) {
  background-image: linear-gradient(57deg, #1cafb3, #2390c5);
}
.grid-container a:nth-child(3n) {
  background-image: linear-gradient(
    150deg,
    rgb(38, 163, 52) -35.74%,
    rgb(25, 186, 223) 64.26%,
    rgb(38, 163, 52) 164.26%
  );
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 3em;
  }
  .grid-container a:nth-child(3n) {
    grid-column: span 4;
    grid-row: span 8;
  }
}

@media (min-width: 1024px) {
  .laptop\:text-center {
    text-align: center;
  }
}
</style>
