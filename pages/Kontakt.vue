<template>
  <main v-if="dataReady">
    <SmallHero :small-hero="contactHero" />
    <section id="content" class="my-5">
    </section>
  </main>
</template>

<script>
export default {
  name: "kontakt",
  data() {
    return {
      dataReady: false,
      contactObj: {},
      contactHero: {},
      api: "wp/v2/pages?slug=kontakt",
      errors: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(this.api);
      this.contactObj = await response.data[0];
      this.contactHero = this.contactObj.acf;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
