<template>
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
</template>

<script>
import { EventBus } from "../../event-bus";

export default {
    props: ['note'],
    data() {
        return {
            payload: {
                id: this.note.id,
                content: this.note.content,
                title: this.note.title
            }
        }
    },
    methods: {
        handleSubmit() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('notes/update', this.payload).then(async (res) => {
                EventBus.$emit('hideLoading');
                this.$bvToast.toast('Note Updated', {
                    title: "Success",
                    variant: "success",
                    solid: true,
                });
                await this.$store.dispatch('notes/fetchNotes');
                this.$bvModal.hide("view-note-modal");
            }).catch(err => {
                EventBus.$emit('hideLoading');
                this.$bvToast.toast(err.message || 'Error Please try again later.', {
                    title: "Time In Failed",
                    variant: "danger",
                    solid: true,
                });
            })
        }
    }
}
</script>

<style>

</style>
