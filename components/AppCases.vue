<template>
<section v-bind="projects" class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
    <h2 class="max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        Tag et kig på de projekter, jeg har været en del af:
    </h2>
  </div>
  <article class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
    <router-link v-for="project in projects || []" :key="project.id" :to="'/projekter/' + project.slug" :aria-label="'Se projektet om ' + project.title.rendered">
      <div class="relative overflow-hidden transition duration-200 transform shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-cover w-full h-56 md:h-64 xl:h-80" :src="project.acf.caseimage" :alt="project.title.rendered" />
        <div class="absolute inset-x-0 bottom-0 px-4 py-4 bg-black bg-opacity-75">
          <h4 class="text-lg text-green-600 mt-1 font-bold">
            {{project.title.rendered}}
          </h4>
          <p class="dark:text-white text-gray-100 text-sm">
            {{project.acf.subheading}}
          </p>
        </div>
      </div>
    </router-link>
  </article>
</section>

</template>

<script>
import axios from 'axios';

export default {
  name: 'AppCases',
  props: {
  },
  data() {
    return {
      projects: null,
      casesAPI: process.env.VUE_APP_CASES,
      errors: [],
    };
  },
    async mounted () {
    try {
      const response = await axios.get(this.casesAPI)
      this.projects = response.data
      console.log(this.projects)

    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
