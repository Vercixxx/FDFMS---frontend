<template>
    <v-layout>

        <div class="min-h-screen">

            <div class="relative flex items-center justify-center" style="min-height: 100vh; width: 100vw;">
                <span class="absolute inset-0 blur-sm bg-fixed"
                    :style="`background-image: url(${backgroundImageURL}); background-size: cover; background-position: center; z-index: -1;`"></span>


                <!-- Form -->
                <div class="w-100">


                    <v-row style="background-color: rgba(0, 0, 0, 0.9);" class="pa-15">
                        <v-col align="center" justify="center"
                            class="text-5xl pa-4 flex items-center justify-center text-wrap font-bold"
                            style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);">
                            <span class=" pa-7 rounded-xl">

                                <span class="fw-bold">F</span>ood
                                <span class="fw-bold">D</span>elivery
                                <span class="fw-bold">F</span>leet <br>
                                <span class="fw-bold">M</span>anagement
                                <span class="fw-bold">S</span>ystem

                            </span>
                        </v-col>

                        <v-col cols="12" sm="5" align="center" justify="center">
                            <!-- Form -->


                            <div style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);" class="text-white rounded-lg ">


                                <v-form v-model="form">

                                    <!-- Username field -->
                                    <v-text-field v-model="username" variant="outlined" label="Username"
                                        ref="usernameInput" :readonly="loading" :rules="usernameRules" class="mb-2"
                                        clearable density="compact" prepend-icon="mdi-account-tie"
                                        autocomplete="username">
                                    </v-text-field>
                                    <!-- Username field -->

                                    <!-- Password recovery -->
                                    <div
                                        class="text-subtitle-1 text-medium-emphasis d-flex align-end justify-space-between">
                                        <span></span>

                                        <v-btn variant="plain" size="x-small"
                                            class="text-cyan-darken-1 font-weight-bold" prepend-icon="mdi-restore"
                                            @disabled="loading">
                                            Forgot password?
                                        </v-btn>
                                    </div>
                                    <!-- Password recovery -->

                                    <!-- Password field -->
                                    <v-text-field v-model="password" variant="outlined" label="Password"
                                        ref="passwordInput" :readonly="loading" :rules="passwordRules" density="compact"
                                        :type="passwordVisible ? 'text' : 'password'" prepend-icon="mdi-key"
                                        :append-inner-icon="passwordVisible ? 'mdi-eye' : ' mdi-eye-off'"
                                        @click:append-inner="passwordVisible = !passwordVisible"
                                        autocomplete="current-password">
                                    </v-text-field>
                                    <!-- Password field -->

                                    <!-- Button login -->
                                    <span>
                                        <v-tooltip v-if="!form" activator="parent" location="top" no-overflow>
                                            Fill required fields
                                        </v-tooltip>
                                        <span>
                                            <v-btn :disabled="!form" :loading="loading" block class="mt-10"
                                                :class="form ? 'bg-green-darken-1' : ''" size="large" type="submit"
                                                append-icon="mdi-login" v-autofocus @click="SignIn">
                                                Login
                                            </v-btn>
                                        </span>
                                    </span>
                                    <!-- Button login -->

                                </v-form>
                            </div>

                            <!-- Form -->
                        </v-col>

                    </v-row>

                </div>
                <!-- Form -->


            </div>

        </div>

    </v-layout>
</template>


<script setup lang="ts">
import { ref } from 'vue';


// Bg image
const backgroundImageURL = ref('https://tse4.mm.bing.net/th/id/OIG4.nbzj2ZbA.rXiejlkUaM1?pid=ImgGn');
// Bg image



// Form
const form = ref(false);
const loading = ref(false);

// Username
const username = ref('');
const usernameRules = ref([
    (v: string) => !!v || 'Username is required',
    (v: string) => (v && v.length >= 3) || 'Username must be at least 3 characters',
    (v: string) => /^[a-zA-Z0-9]+$/.test(v) || 'Only letters and numbers are allowed',
]);

// Password
const password = ref('');
const passwordVisible = ref(false);
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length >= 6) || 'Password must be at least 6 characters',
]);
// Form


// SignInUser
import { SignInUser } from '../scripts/LoginUser'

const SignIn = async () => {
    console.log('Signing in user');

    loading.value = true;

    const respose = await SignInUser(username.value.trim(), password.value.trim());

    if (respose) {
        console.log('User logged in');
    } else {
        console.log('User not logged in');
    }

    loading.value = false;
}


// SignInUser
</script>