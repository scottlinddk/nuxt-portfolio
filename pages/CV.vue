<template>
<main v-if="dataReady">
  <SmallHero :small-hero="cvHero" />
  <section id="content" class="my-5">
  </section>
  <JobsComponent />
  <SliderComponent />
</main>
</template>

<script>

export default {
  name: 'cv',  
  data () {
    return {
      dataReady: false,
      jobsObj: undefined,
      cvHero: {},
      api: 'wp/v2/pages?slug=cv',
      errors: []
    }
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api)
      this.jobsObj = await response.data[0]
      this.cvHero = await this.jobsObj.acf
      this.dataReady = true
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>