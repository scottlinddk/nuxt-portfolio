<template>
  <section
    class="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8 relative py-26 lg:mt-20"
  >
    <h2
      class="
        text-center
        mb-6
        text-2xl
        font-bold
        tracking-tight
        sm:text-4xl
        text-transparent
        bg-clip-text bg-gradient-to-r
        from-green-500
        via-green-700
        to-green-800
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
          md:w-1/2
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

        <div class="justify-between sm:flex">
          <div>
            <h3 class="text-xl font-bold text-gray-900">
              Multimediedesignstuderende med UX/UI baggrund
            </h3>
            <p class="mt-1 text-xs font-medium text-gray-600">Scott Lind</p>
          </div>

          <div class="flex-shrink-0 hidden ml-3 sm:block">
            <img
              class="object-cover w-16 h-16 rounded-lg shadow-sm"
              :src="profileImage"
              alt=""
            />
          </div>
        </div>
        <div class="mt-4 sm:pr-8">
          <p class="text-sm text-gray-500 mb-6">Verdens fedeste beskrivelse.</p>
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
