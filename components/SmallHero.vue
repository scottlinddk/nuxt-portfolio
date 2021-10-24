<template>
  <section v-if="dataReady" class="mb-16">
    <div class="">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h1 class="text-2xl font-extrabold mb-6 font-serif text-center text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-800">
            {{smallHero.tagline}} 
          </h1>
          <p class="text-base text-gray-700 md:text-lg">
            {{smallHero.description}}
          </p>
        </div>
        <div class="flex items-center justify-center">
          <NuxtLink :to="smallHero.cta_link"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
          >
          {{smallHero.cta}}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "JobsComponent",
  components: {},
  props: {
    smallHero: {
      type: Object
    }
  },
  data() {
    return {
      dataReady: false,
      api: process.env.JOBS,
      cvObj: {},
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.api);
      this.jobsArr = await response.data;
      console.log(this.jobsArr);
      this.dataReady = true
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>