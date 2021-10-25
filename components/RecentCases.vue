<template>
  <section
    v-if="dataReady"
    class="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 relative py-26 mt-20"
  >
    <div class="relative">
      <div class="grid grid-cols-1 lg:items-center">
        <div class="text-center lg:max-w-2xl mx-auto">
          <p class="text-base leading-6 text-green-500 font-semibold uppercase">
            Seneste cases
          </p>
          <h2 class="mb-6 text-2xl font-bold tracking-tight sm:text-4xl">
            Se hvad jeg for nyligt har haft gang
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            Helt vanvittigt tekst yo
          </p>
        </div>
        <div class="mt-10 justify-center">
          <div class="relative flex flex-col space-y-4">
            <div
              v-for="recentCase in recentCases"
              :key="recentCase.id"
              class="flex items-end justify-center space-x-4"
            >
            <NuxtLink :to="'/cases/' + recentCase.slug">
              <img
                class="
                  rounded-lg
                  shadow-lg
                  transition
                  duration-200
                  hover:shadow-2xl
                  cursor-pointer
                  w-46
                  md:w-64
                "
                width="260"
                :src="recentCase.acf.caseimage"
                :alt="recentCase.title.rendered"
              />
            </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppBtn :link="'cases'" :text="'Se cases'" />
    <!-- {{ recentCases }} -->
  </section>
</template>

<script>
export default {
  name: "RecentCases",
  data() {
    return {
      dataReady: false,
      recentCases: null,
      casesArr: null,
      api: process.env.CASES,
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.api);
      this.casesArr = await response.data;
      this.recentCases = this.casesArr.slice(0, 2);
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
</style>
