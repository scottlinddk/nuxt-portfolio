<template>
  <section id="profil"
    class="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8 relative py-26 lg:mt-20"
  >
    <h2
      class="
      text-gray-900
        text-center
        mb-6
        text-2xl
        font-bold
        tracking-tight
        sm:text-3xl
      "
    >
      Min profil
    </h2>
    <article>
      <NuxtLink
        class="
          relative
          mx-auto
          w-full
          md:w-2/3
          block
          px-8
          py-6
          overflow-hidden
          bg-gray-50
          border border-gray-100
          rounded-lg
          hover:shadow-lg
          transition
          hover:shadow-xl hover:boder-none
          focus:shadow-outline focus:outline-none
        "
        :to="'/' + link"
      >
        <span
          class="
            absolute
            text-white text-center
            mt-4
            px-5
            inset-x-0
            bottom-0
            h-6
            bg-gradient-to-r
            from-green-300
            via-blue-500
            to-purple-600
          "
          >Jeg søger praktik til januar 2022</span
        >

        <div class="justify-between mb-6 sm:flex">
          <div>
            <h3 class="text-xl font-bold text-gray-900">
              Multimediedesignstuderende med UX/UI baggrund
            </h3>
            <p class="mt-1 text-xs font-medium text-gray-600">Scott Lind</p>
          </div>

          <div class="flex-shrink-0 hidden ml-3 sm:block">
            <img
              class="object-cover w-32 h-full rounded-lg shadow-sm"
              :src="profileImage"
              alt=""
            />
          </div>
        </div>
     </NuxtLink>
    </article>
  </section>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    link: String,
    profileImage: String
  }
};
</script>
