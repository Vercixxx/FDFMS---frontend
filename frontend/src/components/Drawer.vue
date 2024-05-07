<template>
    <div>
        <v-navigation-drawer expand-on-hover rail >

            <component :is="menu?.component" />

        </v-navigation-drawer>
    </div>
</template>

<script setup lang="ts">
// User
const userRole = JSON.parse(sessionStorage.getItem('userData')).user_role;

// Menu
// Imports
import { defineAsyncComponent } from 'vue';

const menus = [
    {
        role: 'HR',
        component: defineAsyncComponent(() => import('../pages/HR/HRMenu.vue')),
    },
]
const menu = menus.find(menu => menu.role === userRole);
</script>