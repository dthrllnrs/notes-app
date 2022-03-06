<template>
    <b-navbar type="dark" variant="info">
        <b-navbar-nav align="right">
            <b-navbar-brand href="#">HRMIS</b-navbar-brand>
            <b-nav-item-dropdown text="User" right>
                <b-dropdown-item @click="logout">logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('auth/logout').then(res => {
                this.$router.replace('/login')
            });
        }
    }
}
</script>
