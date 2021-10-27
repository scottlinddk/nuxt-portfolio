<template>
  <section v-if="dataReady" class="mb-16">
    <div class="">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h1 class="text-2xl font-extrabold mb-6 font-serif text-center text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-green-700 to-green-800">
            {{smallHero.tagline}} 
          </h1>
          <p class="text-base text-gray-700 md:text-lg">
            {{smallHero.description}}
          </p>
        </div>
        <div class="flex items-center justify-center">
          <AppBtn :link="smallHero.cta_link" :text="smallHero.cta" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "SmallHero",
  props: {
    smallHero: {
      type: Object
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>