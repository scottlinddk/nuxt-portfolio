<template>
  <section v-if="dataReady" id="runs">
    <h2
      class="
        text-gray-900 text-center
        mb-6
        text-2xl
        font-bold
        tracking-tight
        sm:text-4xl
      "
    >
      Jeg kan gode lide at 🏃🏼
    </h2>
    <div class="mx-auto">
      <div class="max-w-prose mx-auto" v-html="lastRun.content.rendered"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Runs",
  data() {
    return {
      dataReady: false,
      runsAPI: "https://wp.scottlind.dk/wp-json/wp/v2/posts?categories=3",
      errors: [],
      lastRun: null,
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(this.runsAPI);
      this.lastRun = await response.data[0];
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

