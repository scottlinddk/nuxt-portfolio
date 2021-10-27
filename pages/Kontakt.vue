<template>
<main v-if="dataReady">
  <SmallHero :small-hero="contactHero" />
  <section class="my-5">
  </section>
</main>
</template>

<script>
export default {
  name: 'Kontakt',  
  data () {
    return {
      dataReady: false,
      contactObj: {},
      contactHero: {},
      api: process.env.CONTACT,
      errors: []
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get(this.api)
      this.contactObj = await response.data[0]
      this.contactHero = this.contactObj.acf
      this.dataReady = true
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>
