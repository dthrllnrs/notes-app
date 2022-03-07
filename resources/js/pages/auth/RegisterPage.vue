<template>
    <div class="container-fluid">
        <b-row>
            <b-col cols="12" sm="7" offset-sm="5" md="6" offset-md="6" lg="4" offset-lg="8">
                <b-card
                    bg-variant="light"
                    header="Register"
                    class="text-center"
                >
                <validation-observer ref="form" v-slot="{ handleSubmit }">
                    <b-form class="text-left" @submit.stop.prevent="handleSubmit(register)">
                        <validation-provider name="Name" vid="name" rules="required" v-slot="{errors, valid, dirty}">
                            <b-form-group label="Name *">
                                <b-form-input
                                    id="reg-name"
                                    autofocus
                                    required
                                    v-model="payload.name"
                                    :state="dirty ? valid : null"
                                ></b-form-input>
                                <b-form-invalid-feedback id="reg-name-live-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider name="Email" vid="email" rules="required|email" v-slot="{errors, valid, dirty}">
                            <b-form-group label="Email *">
                                <b-form-input
                                    id="reg-email"
                                    type="email"
                                    required
                                    v-model="payload.email"
                                    :state="dirty ? valid : null"
                                ></b-form-input>
                                <b-form-invalid-feedback id="reg-email-live-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider name="Password" rules="required|min:8|confirmed:password_confirmation" vid="password" v-slot="{errors, valid, dirty}">
                            <b-form-group label="Password *">
                                <b-form-input
                                    id="reg-password"
                                    type="password"
                                    required
                                    v-model="payload.password"
                                    :state="dirty ? valid : null"
                                ></b-form-input>
                                <b-form-invalid-feedback id="reg-password-live-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                        <validation-provider name="Password Confirmation" rules="required" vid="password_confirmation" v-slot="{errors, valid, dirty}">
                            <b-form-group label="Confirm Password *">
                                <b-form-input
                                    id="reg-password-confirmation"
                                    type="password"
                                    required
                                    v-model="payload.password_confirmation"
                                    :state="dirty ? valid : null"
                                ></b-form-input>
                                <b-form-invalid-feedback id="reg-password-confirmation-live-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
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
                </validation-observer>
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
            },
        }
    },
    methods: {
        register() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('auth/register', this.payload).then(() => {
                this.$store.dispatch('auth/login', {
                    email: this.payload.email,
                    password: this.payload.password
                }).then(res => {
                    this.$router.replace({ path: "/" });
                })
            }).catch(err => {
                EventBus.$emit('hideLoading');
                console.log(err);
                if(err.status == 422) {
                    this.$refs.form.setErrors(err.data.errors);
                }
                this.$bvToast.toast(err.data.message || 'Error Please try again later.', {
                    title: "Register Failed",
                    variant: "danger",
                    solid: true,
                });
            }).finally(() => {
                EventBus.$emit('hideLoading');
            });
        },
        checkAuth() {
            this.$store.dispatch('auth/check');
        },
        validateState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
    },
}
</script>
