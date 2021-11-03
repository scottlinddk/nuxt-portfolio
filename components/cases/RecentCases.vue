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
          <div class="relative flex flex-row space-y-4 justify-center">
            <CasesAppCase               
            v-for="recentCase in recentCases"
              :key="recentCase.id"
            :title="recentCase.title.rendered"
            :slug="recentCase.slug"
            :subheading="recentCase.acf.subheading"
            :case-image="recentCase.acf.caseimage.sizes.medium"
            />
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
