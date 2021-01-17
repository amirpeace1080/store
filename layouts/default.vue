<template>
  <div>
    <Navbar />
    <div class="mr-2 mt-5">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<style>
html,
body{
  font-family: 'Vazir', sans-serif;
  /* background: url("https://papers.co/wallpaper/papers.co-vk55-android-lollipop-material-design-pattern-36-3840x2400-4k-wallpaper.jpg"); */
}
</style>
