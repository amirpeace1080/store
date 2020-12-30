<template>
  <div>
    <Navbar />
    <div class="container mr-2">
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
}
</style>
