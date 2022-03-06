<template>
    <fade-transition :duration="100" mode="out-in">
        <div class="container-fluid mt-4">
            <router-view></router-view>
        </div>
    </fade-transition>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
    data() {
        return {}
    },
    components: {
        FadeTransition,
    },
};
</script>
