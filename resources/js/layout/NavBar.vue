<template>
    <b-navbar type="dark" variant="info">
        <b-navbar-nav align="right">
            <b-navbar-brand href="#">Notes App</b-navbar-brand>
            <b-nav-item-dropdown :text="user.name" right>
                <b-dropdown-item @click="logout">logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
import { mapState } from 'vuex'

export default {
    methods: {
        logout() {
            this.$store.dispatch('auth/logout').then(res => {
                this.$router.replace('/login')
            });
        }
    },
    computed: mapState({
        user: state => state.auth.active_user,
    }),
}
</script>
