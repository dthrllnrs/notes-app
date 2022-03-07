<template>
    <div class="container-fluid">
        <b-row>
            <b-col cols="12" sm="7" offset-sm="5" md="6" offset-md="6" lg="4" offset-lg="8">
                <b-card
                    bg-variant="light"
                    header="Login"
                    class="text-center"
                >
                    <validation-observer ref="form" v-slot="{ handleSubmit }">
                        <b-form class="text-left" @submit.prevent="handleSubmit(login)">
                            <validation-provider name="Email" rules="required|email" v-slot="{errors, valid, touched}">
                                <b-form-group label="Email *">
                                    <b-form-input
                                        v-model="payload.email"
                                        required
                                        type="email"
                                        autofocus
                                        :state="touched ? valid : null"
                                    ></b-form-input>
                                    <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
                            <validation-provider name="Password" rules="required" vid="password" v-slot="{errors, valid, touched}">
                                <b-form-group label="Password *">
                                    <b-form-input
                                        v-model="payload.password"
                                        required
                                        type="password"
                                        :state="touched ? valid : null"
                                    ></b-form-input>
                                    <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                                </b-form-group>
                            </validation-provider>
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
                    </validation-observer>
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
                EventBus.$emit('hideLoading');
                if(err.status == 422) {
                    this.$refs.form.setErrors(err.data.errors);
                }
                this.$bvToast.toast(err.data.message || 'Error Please try again later.', {
                    title: "Login Failed",
                    variant: "danger",
                    solid: true,
                });
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
