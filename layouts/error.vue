<template>
  <div class="">
    <div v-if="error.statusCode === 404" class="text-center">
        <h1 class="text-4xl my-6">Siden blev ikke fundet..</h1>
    <img
        src="https://www.hyperui.dev/code/photos/confused-travolta.gif"
        alt="John Travolta confused"
        class="mx-auto object-cover w-1/2 h-64 rounded-lg"
    />
    <p class="mt-6 text-gray-500">
        Prøv at gå til <NuxtLink to="/">forsiden</NuxtLink>.
    </p>
    </div>
    <div v-else>
    <h1>Der skete en fejl ved indlæsning af siden. Prøv at gå til <NuxtLink to="/">forsiden.</NuxtLink></h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>