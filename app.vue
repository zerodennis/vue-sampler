<template>
  <header-bar />
  <hero />
  <footer-section />
</template>

<script>
import HeaderBar from "./components/common/HeaderBar.vue";
import Hero from "./components/landing/Hero.vue";
import Footer from './components/landing/Footer.vue';
import BaseButton from "./components/common/BaseButton.vue";

export default {
  components: {
    HeaderBar,
    Hero,
    BaseButton,
    'footer-section': Footer,
  },
};

</script>
