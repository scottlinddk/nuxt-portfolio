<template>
  <div id="app" class="bg-gradient-to-r from-green-50 to-blue-50">
    <AppHeader :wp-obj="wpObj" />
    <Nuxt />

    <div v-if="errors > 0" class="text-red">
      Noget gik galt da der skulle indlæses data 😔 Prøv at genindlæse siden.
    </div>
    <AppFooter :wp-obj="wpObj" />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
      wpObj: {},
      api: process.env.HOME,
      errors: []
    }
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api)
      this.wpObj = response.data[0]
      console.log(this.wpObj)
      
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>