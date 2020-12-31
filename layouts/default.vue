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
}
</style>
