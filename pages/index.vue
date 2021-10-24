<template>
  <main v-if="dataReady">
    <section>
      <Hero :wp-obj="wpObj.acf" />
      <Hero2 />
      <Skills />
      <LandingProjects :wp-obj="wpObj" />
      <SliderComponent />
      {{ wpObj }}
    </section>
  </main>
</template>

<script>
export default {
  name: "Hjem",
  data() {
    return {
      dataReady: false,
      wpObj: {},
      api: process.env.API_HOME,
      errors: [],
    }
  },
  async created() {
    try {
      const response = await this.$axios.get(this.api)
      this.wpObj = await response.data[0]
      console.log(this.wpObj)
      this.dataReady = true
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
<style>
</style>
