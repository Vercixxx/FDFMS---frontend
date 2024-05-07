<template>
  <v-app>

    <v-app-bar v-if="$route.path != '/'"></v-app-bar>

    <v-main>
      <router-view/>
    </v-main>


  </v-app>
</template>




<style>
body::-webkit-scrollbar {
  display: none;
}

body,
html {
  padding: 0;
  margin: 0;
}
</style>