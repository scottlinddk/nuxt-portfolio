<template>
<div class="relative group">
  <div class="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg opacity-75 filter blur 
  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
  <NuxtLink to="#profil"
      class="relative px-7 py-4 bg-green-500 rounded-lg leading-none flex items-center divide-x divide-gray-600">
      <span class="flex items-center space-x-5 pr-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
      </span>
      <span class="text-green-200 pl-6 group-hover:text-green-50 transition duration-200">{{wpObj.cta}} &rarr;</span>
  </NuxtLink>
</div>
</template>

<script>

export default {
  name: 'GlowBtn',
  props: {
    wpObj: {
      type: Object
    }
  }
}
</script>

<style>

</style>
