<template>
  <div>
    <Navbar />
    <div class="mr-2 mt-5">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
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
