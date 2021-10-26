<template>
  <main v-if="dataReady">
    <SmallHero :small-hero="migHero" />
    <section class="my-5">
      {{ wpObj.title.rendered }}
    </section>
  </main>
</template>

<script>
export default {
  name: "Mig",
  data() {
    return {
      dataReady: false,
      wpObj: null,
      migHero: null,
      api: process.env.MIG,
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.api);
      this.wpObj = await response.data[0];
      this.migHero = this.wpObj.acf;
      console.log(this.wpObj);
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
