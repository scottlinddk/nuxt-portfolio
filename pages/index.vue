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
      api: process.env.API_HOME,
      casesAPI: process.env.API_HOME,
      errors: null, 
    }
  },
  async created() {
    try {
      const response = await this.$axios.get(this.api)
      this.wpObj = await response.data[0]
      this.profileImage = await this.wpObj.acf.profile_image.url
      console.log(this.wpObj)
      this.dataReady = true
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>
<style>
</style>
