<template>
  <section class="relative flex flex-col pt-8 md:pt-16 pb-4 lg:pt-0 md:flex-row lg:pb-0">
    <div
      class="
        flex flex-col
        items-start
        w-full
        max-w-xl
        px-8
        mx-auto
        lg:px-8 lg:max-w-screen-xl
      "
    >
      <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <div class="max-w-xl mb-6">
          <h1
            class="
              max-w-lg
              mb-6
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-800
            "
          >
            {{ heroObj.tagline }} <span>👨🏼‍💻</spaN>
          </h1>
          <p class="text-base text-gray-700 md:text-lg">
            {{ heroObj.description }}
          </p>
        </div>
        <div class="flex flex-col items-center md:flex-row">
          <GlowBtn :wp-obj="heroObj" />
        </div>
      </div>
    </div>
    <div
      class="
        inset-y-0
        right-0
        w-full
        max-w-xl
        px-4
        mx-auto
        lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute
        xl:px-0
      "
    >
      <img
        class="
          object-contain
          w-full
          h-56
          hidden
          md:block
          lg:rounded-none lg:shadow-none
          sm:h-96
          lg:h-full
        "
        :src="heroObj.image"
        alt="Billede af Scott"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    wpObj: {
      type: Object,
    },
  },
  data() {
    return {
      api: process.env.HOME,
      heroObj: {},
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(
        "https://wp.scottlind.dk/wp-json/wp/v2/pages?slug=hjem"
      );
      this.heroObj = response.data[0].acf;
      console.log(this.heroObj);
      // console.log(this.$route.params.slug)
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
