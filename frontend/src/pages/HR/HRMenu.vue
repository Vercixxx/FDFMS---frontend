<template>


    <v-treeview :items="items">


        <template v-slot:prepend="{ item, open }">
           {{open}}
         
            <v-icon :color="open ? 'success':''">
            </v-icon>
          </template>
    </v-treeview>



 
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Treeview
import { VTreeview } from 'vuetify/labs/VTreeview'

// Menu
const items = ref([
    {
        id: 1,
        title : 'Users',
        icon: 'mdi-account-group',
        children: [
            { 
                id: 2, 
                title: 'Add User', 
                icon: 'mdi-account-plus',
                children: [
                    { 
                        id: 4, 
                        title: 'HR',
                        icon: 'mdi-account-tie'
                    },
                    {
                        id: 5,
                        title: 'Payroll',
                        icon: 'mdi-cash-multiple'
                    },
                    {
                        id: 6,
                        title: 'Asset',
                        icon: 'mdi-car-multiple'
                    },
                    {
                        id: 7,
                        title: 'Client',
                        icon: 'mdi-silverware-fork-knife'
                    },
                    {
                        id: 8,
                        title: 'Manager',
                        icon: 'mdi-account-hard-hat-outline'
                    },
                    {
                        id: 9,
                        title: 'Driver',
                        icon: 'mdi-truck-delivery-outline'
                    }
    
                ]},
            { id: 3, title: 'View Users', icon: 'mdi-account-search' },
        ],
    }
])
// Menu


</script>