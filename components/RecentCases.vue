<template>
  <section
    v-if="dataReady"
    class="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 relative py-26 mt-20"
  >
    <div class="relative">
      <div class="grid grid-cols-1 lg:items-center">
        <div class="text-center lg:max-w-2xl mx-auto">
          <h2 class="mb-6 text-2xl font-bold tracking-tight sm:text-4xl">
            Se hvad jeg for nyligt har haft gang i
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            Her er de to seneste cases.
          </p>
        </div>
        <div class="mt-10 justify-center">
          <div class="relative flex flex-row space-y-4">
            <div
              v-for="recentCase in recentCases"
              :key="recentCase.id"
              class="flex justify-center items-center space-x-4"
            >
            <NuxtLink :to="'/cases/' + recentCase.slug">
              <img
                class="
                mx-auto
                  rounded-lg
                  shadow-lg
                  transition
                  duration-200
                  hover:shadow-2xl
                  cursor-pointer
                  h-full
                  w-3/5
                  md:w-3/5
                "
                width="360"
                :src="recentCase.acf.caseimage.sizes.medium_large"
                :alt="recentCase.title.rendered"
              />
            </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppBtn :link="'cases'" :text="'Se flere cases'" />
  </section>
</template>

<script>
export default {
  name: "RecentCases",
  data() {
    return {
      dataReady: false,
      recentCases: null,
      api: 'wp/v2/cases?per_page=2',
    };
  },
  async created () {
    try {
      const response = await this.$axios.get(this.api);
      this.recentCases = await response.data;
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
</style>
