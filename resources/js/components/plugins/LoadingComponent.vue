<template>
    <loading :active="isLoading"
        :loader="loader"
        :color="color"
        :background-color="background_color"
        :is-full-page="fullPage"/>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { EventBus } from '../../event-bus';
    import '../../assets/sass/note-card.scss';
    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true,
                loader: 'spinner',
                color: '#343a40',
                background_color: '#757575',
            }
        },
        created() {
            const self = this;
            EventBus.$on("showLoading", () => {
                self.setIsLoading(true);
            });
            EventBus.$on("hideLoading", () => {
                self.setIsLoading(false);
            });
        },
        components: {
            Loading
        },
        methods: {
            setIsLoading(is_loading) {
                this.isLoading = is_loading;
            }
        }
    }
</script>
