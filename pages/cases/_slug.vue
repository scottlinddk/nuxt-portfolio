<template>
  <main v-if="selectedProject && dataReady" class="my-5">
    <section
      class="
        px-8
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="lg:pr-10">
          <h1 class="mb-4 text-3xl font-extrabold leading-none">
            {{ selectedProject.title.rendered }}
          </h1>
          <p class="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr class="mb-5 border-gray-300" />
        </div>
        <div class="flex space-between flex-wrap p-4 overflow-hidden m-w-4xl">
          <img
            class="object-cover w-full h-36 mb-6"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            delectus alias consequatur ab, repudiandae veniam dignissimos
            aspernatur natus nihil dolorum suscipit molestiae similique,
            maiores, omnis accusamus aliquam voluptate aut necessitatibus.
          </p>
          <div class="grid grid-cols-2 gap-6 mt-6 w-full">
            <div class="inline-flex flex-col h-12">
              <strong>Heading</strong>
              <span>Description</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>Heading</strong>
              <span>Description</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>Heading</strong>
              <span>Description</span>
            </div>
            <div class="inline-flex flex-col h-12">
              <strong>Heading</strong>
              <span>Description</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img :src="selectedProject.acf.caseimage" />
  </main>
</template>

<script>
export default {
  name: "case",
  data() {
    return {
      dataReady: false,
      cases: [],
      casesAPI: process.env.CASES,
      errors: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get(this.casesAPI);
      this.cases = await response.data;
      this.dataReady = true;
      console.log(this.cases);
    } catch (e) {
      this.errors.push(e);
    }
  },
  computed: {
    selectedProject() {
      return this.cases.find(
        (project) => project.slug == this.$route.params.slug
      );
    },
  },
};
</script>
<style>
</style>