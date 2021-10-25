<template>
<article class="px-4 py-24 mx-auto max-w-7xl">
  <div class="w-full mx-auto mb-12 text-center md:w-2/3">
    <h2 class="mb-3 text-2xl font-bold text-gray-900 md:leading-tight" itemprop="headline" :title="articleHeading">
      {{articleHeading}}
    </h2>
    <p class="text-left prose">
      {{articleSection}}
    </p>
    <!-- <p class="text-gray-700">
      Written by
      <span class="byline author vcard" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
        <a href="#" target="_blank" itemprop="url" rel="author noopener noreferrer" class="text-primary hover:text-primary-dark"><span itemprop="name">Praveen Juge</span></a>
      </span>
      on <time itemprop="datePublished dateModified" datetime="2010-08-07 11:11:03-0400" pubdate>Jan 02 2021</time>
    </p> -->
  </div>
<!-- 
  <div class="mx-auto prose">
    <p class="mx-auto prose">
      {{articleSection}}
    </p>
  </div> -->
</article>
</template>

<script>
export default {
  name: "CaseArticle",
  components: {},
  props: {
    articleLabel: String,
    articleHeading: String,
    articleSection: String,
  },
  // data() {
  //   return {
  //     dataReady: false,
  //     api: process.env.JOBS,
  //     cvObj: {},
  //   };
  // },
  // async mounted() {
  //   try {
  //     const response = await this.$axios.get(this.api);
  //     this.jobsArr = await response.data;
  //     console.log(this.jobsArr);
  //     this.dataReady = true;
  //   } catch (e) {
  //     this.errors.push(e);
  //   }
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>