<template>
  <div
    v-if="dataReady"
    id="app"
    class="bg-gradient-to-r from-green-50 to-blue-50 min-h-full"
  >
    <!-- <AppHeader :wp-obj="wpObj" /> -->
    <Nuxt />

    <div v-if="errors > 0" class="text-red">
      Noget gik galt da der skulle indlæses data 😔 Prøv at genindlæse siden.
    </div>
    <AppFooter :wp-obj="wpObj" />

  </div>
</template>

<script>

export default {
  name: "temporary",
  scrollToTop: true,
  data() {
    return {
      dataReady: false,
      wpObj: {},
      api: process.env.HOME,
      errors: [],
      scTimer: 0,
      scY: 0,
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(this.api);
      this.wpObj = await response.data[0];
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>

<style>

</style>