<template>
    <v-app-bar v-if="$vuetify.display.lgAndUp">

        <v-row>



            <!-- Right menu -->
            <v-col align="end">


                <v-tooltip text="Help" location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn :ripple="false" variant="plain" v-bind="props" icon="mdi-help">

                        </v-btn>
                    </template>
                </v-tooltip>

                <v-tooltip :text="darkMode ? 'Enable light mode' : 'Enable dark mode'" location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn :ripple="false" variant="plain" v-bind="props"
                            :icon="darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny'" @click="
                                $vuetify.theme.global.name = $vuetify.theme.global.current.dark
                                    ? 'light'
                                    : 'dark'">

                        </v-btn>
                    </template>
                </v-tooltip>

                <v-tooltip text="Logout" location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn :ripple="false" variant="plain" v-bind="props" icon="mdi-logout" @click="SignOutUser">
                        </v-btn>
                    </template>
                </v-tooltip>


                <!-- <v-dialog v-model="logoutDialog" width="400">
                        <v-card>
                            <div class="text-warning text-h6 text-md-h5 text-lg-h4">
                                <div class="d-flex justify-content-between align-items-center px-4 pt-4">
                                    <v-icon icon="mdi-alert" class="text-h4" />
                                    Logout
                                    <v-icon icon="mdi-alert" class="text-h4" />
                                </div>
                                <hr>
                            </div>

                            <div class="h2 text-h6 text-md-h5 text-lg-h4" align="center">
                                Are you sure?
                            </div>
                            <hr>

                            <div class="d-flex align-items-center justify-content-evenly mb-3">
                                <v-btn variant="outlined" width="130" class="mr-5"
                                    @click="logoutDialog = false">No</v-btn>
                                <v-btn variant="outlined" width="130" @click="logout" color="red"
                                    append-icon="mdi-logout">Yes</v-btn>
                            </div>
                        </v-card>
                    </v-dialog> -->




            </v-col>
            <!-- Right menu -->


        </v-row>



    </v-app-bar>

    <v-app-bar v-else>
        <v-btn text="logout" @click="SignOutUser"></v-btn>MOBILE
    </v-app-bar>

</template>


<script setup lang="ts">

// LogOut User
import { SignOutUser } from '../scripts/user'
// LogOut User

// Theme
import { useTheme } from 'vuetify'
import { computed } from 'vue'
const theme = useTheme();
const darkMode = computed(() => theme.name.value === 'dark');
// Theme





</script>