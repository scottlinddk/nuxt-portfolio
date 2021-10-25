<template>
  <section v-if="dataReady" class="text-gray-900" role="banner">
    <div class="px-6 py-4 mx-auto max-w-screen-xl">
      <div class="mx-auto text-center">
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
          <!-- bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 -->
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        <p class="max-w-xl mx-auto mt-6 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          necessitatibus dolorem soluta, recusandaefacere error.
        </p>

        <div class="mt-8 sm:justify-center sm:flex">
          <AppBtn :link="'kontakt'" :text="'Kontakt mig for faen'" />
        </div>
      </div>
    </div>
    {{casesArr}}
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      casesArr: null,
      api: process.env.CASES,
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.api);
      this.casesArr = await response.data;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
</style>
