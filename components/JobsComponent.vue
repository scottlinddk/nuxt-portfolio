<template>
  <section v-if="dataReady" id="jobs"
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-20
    "
  >
    <div class="grid max-w-2xl mx-auto">
        <article class="flex" v-for="job in jobsArr" :key="job.id">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-20 bg-gray-300 sm:h-full"></div>
          <div class="w-48">
            <div
              class="flex justify-center px-2 py-2 text-xs font-medium border rounded-lg"
            >
              {{job.acf.job_start}} - {{job.acf.job_end}} 
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div>
            <h3 class="text-sm md:text-base font-semibold">{{job.title.rendered}} - <span class="font-light italic">{{job.acf.job_title}} </span></h3>
            <p v-html="job.content.rendered" class="text-sm text-gray-700 pb-4">
            </p>
          </div>
        </div>
        </article>
    </div>
     {{jobsObj}}
  </section>
</template>

<script>

export default {
  name: "JobsComponent",
  data() {
    return {
      dataReady: false,
      jobsApi: process.env.JOBS,
      jobsArr: [],
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.jobsApi);
      this.jobsArr = await response.data;
      this.dataReady = true
    } catch (e) {
      this.errors.push(e);
    }
  },
}
</script>