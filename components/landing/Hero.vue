<template>
  <div class="bg-ebonyClay flex flex-col">
    <div class="bg-ebonyClay px-8 gap-8 flex flex-col lg:flex-row lg:items-center lg:justify-start">
    <!-- Paragraph -->
    <div class="text-white text-center lg:text-left flex flex-col gap-6">
      <h1 class="text-3xl font-bold">
        Complete <span class="text-emeraldLake font-bold">Vue.js training</span>
        solutions for companies
      </h1>
      <p>
        Training solutions designed for companies, agencies and
        organisations with developers using or who are considered using
        the Vue.js framework.
      </p>
      <div>
        <base-button>
          Talk to Sales
        </base-button>
      </div>
    </div>
    <!-- Paragraph End -->
      <img :src="'/landing/hero-image.svg'">
    </div>
    <!-- About -->
    <div class="relative w-full h-156 bg-ebonyClay">
      <img src="/landing/wave-1.svg" alt="Background" class="absolute top-0 left-0 w-full h-full object-cover">
      <img src="/landing/wave-2.svg" alt="Overlay" class="absolute top-0 left-0 w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <button class="bg-white text-black p-4 rounded">Click Me</button>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
import BaseButton from "../common/BaseButton.vue";

export default {
  name: 'Hero',
  components: {
    BaseButton,
  }
}
</script>

<style scoped>
.background-image {
  background-image: url('/landing/wave-2.svg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  @apply bg-ebonyClay;
}

.child-background-image {
  background-image: url('/landing/wave-1.svg');
  background-size: cover;
  background-position: center;
  height: 100vh;

}
</style>