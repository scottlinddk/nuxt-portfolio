<template>
  <main class="scroll-snap" v-if="dataReady">
      <Hero class="lg:h-screen" :wp-obj="wpObj.acf" />
      <ProfileCard class="h-96" :link="'mig'" :profile-image="profileImage"/>
      <CasesRecentCases />
      <SliderComponent />
      <Contact />
  </main>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: "Hjem",
  mixins: [aosMixin],
  data() {
    return {
      dataReady: false,
      wpObj: null,
      profileImage: null,
      api: 'wp/v2/pages?slug=hjem',
      errors: null, 
    }
  },
  async created() {
    try {
      const response = await this.$axios.get(this.api)
      this.wpObj = await response.data[0]
      this.profileImage = await this.wpObj.acf.profile_image.url
      this.dataReady = true
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
<style>
</style>
