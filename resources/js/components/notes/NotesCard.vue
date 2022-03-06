<template>
    <b-card :title="note.title" class="note-card" @click="handleClick">
        <b-button variant="outline-danger" class="float-right delete-btn" size="sm" @click="handleDeleteClick"><b-icon-trash></b-icon-trash></b-button>
        <b-card-text class="note-card-content">{{note.content}}</b-card-text>
    </b-card>
</template>

<script>
import { EventBus } from "../../event-bus";
import { mapState } from "vuex";

export default {
    props: ['note'],
    methods: {
        handleClick() {
            EventBus.$emit('viewNote', this.note);
        },
        handleDeleteClick(e) {
            this.$store.dispatch('notes/delete', this.note.id).then(async (res) => {
                await this.$store.dispatch('notes/fetchNotes');
            }).catch(err => {
                this.$bvToast.toast(err.message || 'Error Please try again later.', {
                    title: "Delete Note",
                    variant: "danger",
                    solid: true,
                });
            })
            e.stopPropagation()
        }
    }
}
</script>

<style>

</style>
