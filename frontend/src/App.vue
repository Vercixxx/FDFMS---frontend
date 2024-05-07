<template>
  <v-app>

    <AppBar v-if="$route.path != '/'"></AppBar>

    <v-main>


      
      
      
      
      <router-view />
    </v-main>
    
    <!-- Drawer -->
    <div>
      <Drawer v-if="$route.path != '/'"></Drawer>
    </div> 
    <!-- Drawer -->


  </v-app>
</template>


<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const AppBar = defineAsyncComponent(() => import('./components/AppBar.vue'));


// Drawer
const Drawer = defineAsyncComponent(() => import('./components/Drawer.vue'));
// Drawer

</script>



<style>
body::-webkit-scrollbar {
  display: none;
}
</style>