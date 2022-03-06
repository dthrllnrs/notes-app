<template>
    <div>
        <b-row>
            <b-col cols="12" md="4">
                <b-card
                    bg-variant="light"
                    header="Register"
                    class="text-center"
                >
                    <b-form class="text-left" @submit.prevent="register">
                        <b-form-group label="Name:">
                            <b-form-input
                                required
                                v-model="payload.name"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Email:">
                            <b-form-input
                                required
                                v-model="payload.email"
                                type="email"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password">
                            <b-form-input
                                required
                                v-model="payload.password"
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group label="Confirm Password">
                            <b-form-input
                                required
                                v-model="payload.password_confirmation"
                                type="password"
                            ></b-form-input>
                        </b-form-group>
                        <div class="text-center">
                            <b-button
                                type="submit"
                                variant="info"
                                class="w-50"
                                size="sm"
                                >Register</b-button
                            >
                        </div>
                    </b-form>
                    <div class="text-center mt-3 pt-3 border-top">
                        <b-button variant="info" class="w-50" size="sm" href="/login">Login To Existing An Account</b-button>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },
    methods: {
        register() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('auth/register', this.payload).then(() => {
                this.$router.replace({ path: "/login" });
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
