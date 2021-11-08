<template>
  <section class="py-24" role="banner">
    <div class="mx-auto max-w-screen-xl">
      <div class="mx-auto text-center">
        <h2
          class="
            text-gray-900 text-center
            mb-6
            text-2xl
            font-bold
            tracking-tight
            sm:text-3xl
          "
        >
          Kontakt
        </h2>
        <p class="max-w-xl mx-auto mt-6 text-lg">
          Send mig en mail eller giv mig et kald.
        </p>
        <div class="mt-8 sm:justify-center sm:flex">
          <AppBtn :link="'kontakt'" :text="'Kontakt mig for faen'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
</style>
