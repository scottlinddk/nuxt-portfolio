<template>
  <main v-if="dataReady">
    <SmallHero :small-hero="migHero" :current-route="$route.path"/>
    <section id="content" class="my-5">
      {{ wpObj.title.rendered }}
      {{ wpObj.content.rendered }}
    </section>
    <Runs />
    <SliderComponent />
  </main>
</template>

<script>
export default {
  name: "mig",
  data() {
    return {
      dataReady: false,
      wpObj: null,
      migHero: null,
      api: 'wp/v2/pages?slug=mig',
      errors: [],
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api);
      this.wpObj = await response.data[0];
      this.migHero = this.wpObj.acf;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>