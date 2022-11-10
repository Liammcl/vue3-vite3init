<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import navbar from '@/layout/navbar.vue'
import foot from '@/layout/foot.vue'
import sidebar from '@/layout/sidebar.vue'
</script>

<template>
  <navbar></navbar>
  <sidebar></sidebar>
  <foot></foot>
</template>

<style scoped>
#app {
  background-color: black;
  position: absolute;
}
</style>
