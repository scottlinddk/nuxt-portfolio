<template>
  <main v-if="dataReady">
      <Hero :wp-obj="wpObj.acf" />
      <ProfileCard :link="'mig'" :profile-image="profileImage"/>
      <RecentCases />
      <SliderComponent />
      <Contact />
  </main>
</template>

<script>
export default {
  name: "Hjem",
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
