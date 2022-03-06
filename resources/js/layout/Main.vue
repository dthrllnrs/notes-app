<template>
    <div class="main-wrapper">
        <loading-component></loading-component>
        <div class="main-panel">
            <nav-bar></nav-bar>
            <main-content></main-content>
        </div>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';
import MainContent from './Content.vue';
import LoadingComponent from '../components/plugins/LoadingComponent.vue';
export default {
    components: {
        NavBar,
        MainContent,
        // SideBar,
        LoadingComponent,
    }
}
</script>
