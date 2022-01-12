<template>
  <div class="">
    <div v-if="error.statusCode === 404" class="text-center h-screen">
        <h1 class="text-2xl my-6">Siden blev ikke fundet..</h1>
    <img
        src="~static/confused-john-travolta.gif"
        alt="John Travolta confused"
        class="mx-auto object-cover w-1/2 rounded-lg"
    />
    <p class="mt-6">
        Prøv at gå til <NuxtLink class="transition-colors duration-200 hover:text-green-600" to="/">forsiden</NuxtLink>.
    </p>
    </div>
    <div class="text-center h-screen" v-else>
    <h1 class="text-2xl my-6">Der skete en fejl ved indlæsning af siden. Prøv at gå til <NuxtLink to="/">forsiden.</NuxtLink></h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>