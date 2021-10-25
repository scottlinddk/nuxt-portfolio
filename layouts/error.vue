<template>
  <div>
    <div v-if="error.statusCode === 404" class="text-center">
        <h1>Page not found</h1>
    <img
        src="https://www.hyperui.dev/code/photos/confused-travolta.gif"
        alt="John Travolta confused"
        class="mx-auto object-cover w-1/2 h-64 rounded-lg"
    />
    <p class="mt-6 text-gray-500">
        We can't find anything, try going <NuxtLink to="/">home.</NuxtLink>.
    </p>
    </div>
    <div v-else>
    <h1>An error occurred. Try going <NuxtLink to="/">home.</NuxtLink></h1>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>