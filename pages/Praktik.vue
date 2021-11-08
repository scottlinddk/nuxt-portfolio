<template>
<main v-if="dataReady">
  <SmallHero :small-hero="praktikHero" />
  <section id="content" class="my-5">
    PRAKTIK
  </section>
</main>
</template>

<script>
export default {
  name: 'praktik', 
  data () {
    return {
      dataReady: false,
      praktikObj: {},
      praktikHero: {},
      api: 'wp/v2/pages?slug=praktik',
      errors: []
    }
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api)
      this.praktikObj = await response.data[0]
      this.praktikHero = this.praktikObj.acf
      this.dataReady = true
    } catch (e) {
      this.errors.push(e)
    }
  }
}


</script>
