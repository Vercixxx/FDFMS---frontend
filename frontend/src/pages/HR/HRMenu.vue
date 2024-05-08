<template>

    <v-treeview :items="items" color="success" collapse-icon="" expand-icon="">
        <template v-slot:prepend="{ item, open }">

            <v-icon>
                {{ item.icon }}
            </v-icon>

        </template>

        <template v-slot:append="{ item, isActive }">
            <v-icon v-if="item.children && item.children.length > 0">
                {{ isActive ? 'mdi-menu-up' : 'mdi-menu-down' }}
            </v-icon>
        </template>

        <template v-slot:item="{ props }">
            <v-list-item @click="executeAction(props.title)">
                {{ props.title }}
            </v-list-item>
        </template>
        <!-- <template v-slot:item={props}>
            <v-list-item :prepend-icon="props.icon">
                
                {{ props}}
            </v-list-item>
        </template> -->
    </v-treeview>




</template>

<script setup lang="ts">
import { ref } from 'vue';

// Treeview
import { VTreeview } from 'vuetify/labs/VTreeview'


const addUser = (userClass: string) => {
    console.log(userClass);
}

const manageUsers = () => {
    console.log('manageUsers')
}

const findItem = (items, title) => {
    for (let item of items) {
        if (item.title === title) {
            return item;
        } else if (item.children) {
            const foundItem = findItem(item.children, title);
            if (foundItem) {
                return foundItem;
            }
        }
    }
}

const executeAction = (title) => {
    const item = findItem(items.value, title);
    if (item && item.action) {
        item.action();
    }
}


// Menu
const items = ref([
    {
        id: 1,
        title: 'Users',
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
                        icon: 'mdi-account-tie',
                        action: () => addUser("HR")
                    },
                    {
                        id: 5,
                        title: 'Payroll',
                        icon: 'mdi-cash-multiple',
                        action: () => addUser("Payroll")
                    },
                    {
                        id: 6,
                        title: 'Asset',
                        icon: 'mdi-car-multiple',
                        action: () => addUser("Asset")
                    },
                    {
                        id: 7,
                        title: 'Client',
                        icon: 'mdi-silverware-fork-knife',
                        action: () => addUser("Client")
                    },
                    {
                        id: 8,
                        title: 'Manager',
                        icon: 'mdi-account-hard-hat-outline',
                        action: () => addUser("Manager")
                    },
                    {
                        id: 9,
                        title: 'Driver',
                        icon: 'mdi-truck-delivery-outline',
                        action: () => addUser("Driver")
                    }

                ]
            },
            {
                id: 3,
                title: 'View Users',
                icon: 'mdi-account-search',
                action: () => manageUsers()
            },
        ],
    },

    {
        id: 10,
        title: 'Other',
        icon: 'mdi-dots-horizontal',
        children: [
            {
                id: 11,
                title: 'Manage countries/states',
                icon: 'mdi-earth',
            },
        ],
    },

    {
        id: 12,
        title: 'Mailbox',
        icon: 'mdi-email',
        children: [
            {
                id: 13,
                title: 'Send Email',
                icon: 'mdi-email-fast',
            },
            {
                id: 14,
                title: 'Mailbox',
                icon: 'mdi-email-outline',
            },
        ]
    }
])
// Menu




</script>