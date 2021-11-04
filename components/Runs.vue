<template>
<section v-if="dataReady" id="runs">
  <div v-html="lastRun.content.rendered"></div>
</section>
</template>

<script>

export default {
  name: 'Runs',
  data() {
    return {
      dataReady: false,
      runsAPI: 'https://wp.scottlind.dk/wp-json/wp/v2/posts?categories=3',
      errors: [],
      lastRun: null
    };
  },
    async created () {
    try {
      const response = await this.$axios.get(this.runsAPI);
      this.lastRun = await response.data[0];
      console.log(response)
      this.dataReady = true;
      // const response = await this.$axios.get(this.menuAPI)
      // this.menu = await response.data.items
      // this.dataReady = true
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

