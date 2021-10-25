<template>
  <section
    class="
      max-w-screen-xl
      mx-auto
      px-6
      sm:px-6
      lg:px-8
      relative
      py-26
      mt-20
    "
  >
    <div class="relative">
      <div
        class="
          lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center
        "
      >
        <div class="lg:col-start-2 lg:max-w-2xl mx-auto">
          <p
            class="text-base leading-6 text-green-500 font-semibold uppercase"
          >
            Seneste cases
          </p>
          <h2
            class="
            max-w-lg
            mb-6
            text-2xl
            font-bold
            tracking-tight
            sm:text-4xl
            "
          >
            Seneste cases
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Helt vanvittigt tekst yo
          </p>
        </div>
        <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
          <div class="relative space-y-4">
            <div
              class="flex items-end justify-center space-x-4"
            >
              <img
                class="rounded-lg shadow-lg w-46 md:w-64"
                width="260"
                src="/images/object/8.jpg"
                alt="1"
              />
              <img
                class="rounded-lg shadow-lg w-46 md:w-64"
                width="260"
                src="/images/landscape/4.jpg"
                alt="2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        <AppBtn :link="'cases'" :text="'Se cases'" />
  </section>
</template>

<script>
export default {
  name: "RecentCases",
  props: {

  },
  data() {
      return {
          api: process.env.CASES,
      }
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.api);
      this.casesObj = await response.data[0];
      this.dataReady = true;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
</style>
