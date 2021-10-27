<template>
<header v-if="dataReady" id="home">
  <div class="px-2 md:px-8 lg:px-16 py-6 mx-auto z-50">
    <nav class="relative flex items-center justify-between">
      <NuxtLink
        to="/"
        aria-label="Hjem"
        title="Hjem"
        class="inline-flex items-center"
      >
        <span
          class="text-xl font-bold font-serif tracking-wide dark:text-white text-gray-800 uppercase"
          >Scott Lind</span
        >
      </NuxtLink>
      <ul class="flex items-center lowercase hidden space-x-8 lg:flex">
        <li>
          <NuxtLink
          to="/"
          aria-label="Hjem"
          title="Hjem"
          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
          >
          Hjem
          </NuxtLink>
        </li>
        <li v-for="page in menu" :key="page.id">
          <NuxtLink
            :to="'/' + page.slug"
            :aria-label="page.slug"
            :title="page.slug"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-600"
            >{{page.title}}</NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-gray-50 focus:bg-gray-50"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="dark:bg-gray-800 dark:text-white absolute top-0 left-0 w-full z-50">
          <div class="dark:bg-gray-800 dark:text-white p-5 bg-white border rounded shadow-sm z-50">
            <div class="flex items-center justify-between mb-4 z-50">
              <div>
                <NuxtLink
                  to="home"
                  aria-label="Scott Lind"
                  title="Scott Lind"
                  class="inline-flex items-center"
                >
                  <span
                    class="dark:text-white text-xl font-bold font-serif tracking-wide text-gray-800 uppercase"
                    >Scott Lind</span
                  >
                </NuxtLink>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-red-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <NuxtLink
                  to="/"
                  aria-label="Hjem"
                  title="Hjem"
                  class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                  >
                  Hjem
                  </NuxtLink>
                </li>
                <li v-for="page in menu" :key="page.id">
                  <NuxtLink
                    :to="'/' + page.slug"
                    :aria-label="page.slug"
                    :title="page.slug"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                    >{{page.title}}
                    </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      dataReady: false,
      menu: null,
      menuAPI: 'menus/v1/menus/api-menu',
      errors: [],
      isMenuOpen: false,
    };
  },
    async created () {
    try {
      const response = await this.$axios.get(this.menuAPI)
      this.menu = await response.data.items
      this.dataReady = true
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
