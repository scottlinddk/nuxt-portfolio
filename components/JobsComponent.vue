<template>
  <section
    v-if="dataReady"
    id="jobs"
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
    "
  >
    <h2
      class="
        text-gray-900 text-center
        mb-6
        text-2xl
        font-bold
        tracking-tight
        sm:text-3xl
      "
    >
      Et udpluk af mit CV
    </h2>
    <div class="grid max-w-2xl mx-auto">
      <article class="flex" v-for="job in jobsArr" :key="job.id">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-20 bg-gray-300 sm:h-full"></div>
          <div class="w-48">
            <div
              class="
                flex
                justify-center
                px-2
                py-2
                text-xs
                font-medium
                border
                rounded-lg
              "
            >
              {{ job.acf.job_start }} - {{ job.acf.job_end }}
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div>
            <h3 class="text-sm md:text-base font-semibold">
              {{ job.title.rendered }} -
              <span class="font-light italic">{{ job.acf.job_title }} </span>
            </h3>
            <p
              v-html="job.content.rendered"
              class="text-sm text-gray-700 pb-4"
            ></p>
          </div>
        </div>
      </article>
    </div>
    <div class="text-center">
      <a
        class="
          mx-auto
          inline-flex
          items-center
          justify-center
          h-12
          my-6
          px-6
          font-medium
          tracking-wide
          text-white
          transition
          duration-200
          rounded
          shadow-md
          bg-green-500
          hover:bg-green-400 hover:shadow-xl
          focus:shadow-outline focus:outline-none
          hover:cursor-pointer
        "
        href="https://www.linkedin.com/in/scottlind/"
        target="_blank"
        >
        Se mere på LinkedIn
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "JobsComponent",
  data() {
    return {
      dataReady: false,
      jobsApi: "wp/v2/jobs",
      jobsArr: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(this.jobsApi);
      this.jobsArr = await response.data;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>