<template>
    <div>
        <b-row>
            <b-col cols="12" md="4">
                <b-card
                    bg-variant="light"
                    header="Login"
                    class="text-center"
                >
                    <b-form class="text-left" @submit.prevent="login">
                        <b-form-group label="Email:">
                            <b-form-input
                                v-model="payload.email"
                                required
                                type="email"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password">
                            <b-form-input
                                v-model="payload.password"
                                required
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                        <div class="text-center">
                            <b-button
                                type="submit"
                                variant="info"
                                class="w-50"
                                size="sm"
                                >Login</b-button
                            >
                        </div>
                    </b-form>
                    <div class="text-center mt-3 pt-3 border-top">
                        <b-button variant="info" class="w-50" size="sm" href="/register">Create New Account</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus';
export default {
    data() {
        return {
            payload: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('auth/login', this.payload).then(() => {
                this.$router.replace({ path: "/" });
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                EventBus.$emit('hideLoading');
            });
        },
        checkAuth() {
            this.$store.dispatch('auth/check');
        }
    }
}
</script>
