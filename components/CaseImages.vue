<template>
  <section class="flex items-center justify-center">
    <div class="flex flex-col items-end px-3 gap-4">
      <img
        class="
          flex-1
          object-cover
          mb-6
          rounded
          shadow-lg
          w-36
          md:w-46          
          lg:w-64
        "
        :src="firstImage"
        alt=""
      />
      <img
        class="
          flex-1
          object-cover
          w-56
          md:w-80          
          lg:w-96
          rounded
          shadow-lg
        "
        :src="thirdImage"
        alt=""
      />
    </div>
    <div class="px-3 gap-4">
      <img
        class="
        flex-1
          object-cover
          w-56
          md:w-80     
          lg:w-96
          rounded
          shadow-lg
        "
        :src="secondImage"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "CaseImages",
  components: {},
  props: {
    firstImage: String,
    secondImage: String,
    thirdImage: String,
  },
};
</script>

<style scoped>
</style>