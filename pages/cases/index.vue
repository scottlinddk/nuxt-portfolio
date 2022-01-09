<template>
  <main v-if="dataReady">
    <SmallHero :small-hero="casesHero" />
      <Content :wp-obj="casesObj"/>
      <CasesAppCases />
  </main>
</template>

<script>
export default {
  name: "cases",
  data() {
    return {
      dataReady: false,
      casesObj: {},
      casesHero: {},
      casesAPI: 'wp/v2/pages?slug=cases',
      errors: [],
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.casesObj = await response.data[0];
      this.casesHero = this.casesObj.acf;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
