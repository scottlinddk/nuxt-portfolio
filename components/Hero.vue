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
              stagger
              max-w-lg
              mb-6
              text-3xl
              font-bold
              leading-8
              tracking-tight
              sm:text-4xl
              text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-800
            "
          >
            {{ heroObj.tagline }} <span class="text-white">👨🏼‍💻</span>
          </h1>
          <p class="stagger text-base text-gray-700 md:text-lg">
            {{ heroObj.description }}
          </p>
        </div>
        <div class="stagger flex flex-col items-center md:flex-row">
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
import gsap from 'gsap'

export default {
  name: "Hero",
  props: {
    wpObj: {
      type: Object,
    },
  },
  data() {
    return {
      api: 'wp/v2/pages?slug=hjem',
      heroObj: {},
      errors: [],
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api);
      this.heroObj = response.data[0].acf;
    } catch (e) {
      this.errors.push(e);
    }
    gsap.from('.stagger', {
      autoAlpha: 0,
      y: 50,
      ease: "power4.out",
      duration: 2.5,
      stagger: 0.4
    })
  },
};
</script>

<style>

</style>
