<template>
  <main v-if="dataReady">
    <SmallHero :small-hero="casesHero" />
    <section class="my-5">
      <AppCasesFlex />
    </section>
  </main>
</template>

<script>
export default {
  name: "Cases",
  data() {
    return {
      dataReady: false,
      casesObj: {},
      casesHero: {},
      casesAPI: process.env.CASES_PAGE,
      errors: [],
    };
  },
  async mounted() {
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
