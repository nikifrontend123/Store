<template>
  <div>
    <div class="main-cont w-100">
      <div class="main w-100 backgroung-white">
        <div class="r-container">
          <BottomNav></BottomNav>
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import BottomNav from "./components/Navbar/BottomNav.vue";
</script>

<style scoped>
.r-container {
  background-color: #ffffff ;
  width: 100%;
  height: 100vh;
}
</style>