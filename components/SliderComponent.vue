<template>
  <section class="relative w-full mt-6">
    <!-- bg-gradient-to-r from-green-100 to-blue-100 -->
    <div
      class="
        relative
        w-full
        d-container-content
        flex flex-col
        items-center
        xl:py-6
      "
    >
      <div class="flex flex-col w-full items-center col-span-12">
        <div class="mb-2 mt-6">
          <h2 class="text-gray-900 text-center
          mb-6
          text-2xl
          font-bold
          tracking-tight
          sm:text-3xl">Hvad har jeg erfaring med?</h2>
        </div>
        <p
          class="
            font-normal
            text-center text-body-base
            md:text-body-lg
            2xl:text-body-xl
            mb-6
            max-w-prose
          "
        >
          Gennem forskellige cases har jeg arbejdet med forskellige teknologier, sprog og værktøjer.
        </p>
        <div class="slider mb-2">
          <ul class="slide-track">
            <li v-for="icon in icons" :key="icon.index" class="flex flex-col md:mx-12 items-center slide">
                <img
                  :src="'/icons/' + icon.logo"
                  class="h-12"
                  :alt="icon.title"
                  :title="icon.title"
                />
                <p class="text-sm mt-2">{{icon.title}}</p>
            </li>
          </ul>
        </div>
            <!-- <AppBtn :link="'cv'" :text="'Se hvad jeg ellers kan'" /> -->
      </div>
    </div>
  </section>
</template>

<script>
import icons from '@/assets/icons/icons'

export default {
  name: "SliderComponent",
  data() {
    return {
        icons
    }
  }
};
</script>

<style>

@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(-250px * 7));
            transform: translateX(calc(-250px * 7));
  }
}
.slider {
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
          transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 60s linear infinite;
    animation: scroll 60s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>