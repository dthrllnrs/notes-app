<template>
    <b-modal id="add-note-modal" title="Add Note" hide-footer>
        <b-form @submit.prevent="handleSubmit">
            <b-form-group label="Title">
                <b-form-input v-model="payload.title"></b-form-input>
            </b-form-group>
            <b-form-group label="Content">
                <b-form-textarea placeholder="Enter note content here" required v-model="payload.content" rows="3" max-rows="6"></b-form-textarea>
            </b-form-group>
            <div class="text-right">
                <b-button type="submit" variant="info">Save</b-button>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
import { EventBus } from "../../event-bus";

export default {
    data() {
        return {
            payload: {
                title: '',
                content: '',
            }
        }
    },
    methods: {
        resetForm() {
            this.payload.title = '';
            this.payload.content = '';
        },
        handleSubmit() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('notes/create', this.payload).then(async (res) => {
                EventBus.$emit('hideLoading');
                await this.$bvToast.toast('Note Created', {
                    title: "Success",
                    variant: "success",
                    solid: true,
                });
                await this.$store.dispatch('notes/fetchNotes');
                this.$bvModal.hide("add-note-modal");
            }).catch(err => {
                EventBus.$emit('hideLoading');
                this.$bvToast.toast(err.message || 'Error Please try again later.', {
                    title: "Time In Failed",
                    variant: "danger",
                    solid: true,
                });
            })
        }
    },
    destroyed() {
        this.resetForm();
    }
}
</script>

<style>

</style>
