<template>
    <b-modal id="view-note-modal" :title="note.title" hide-footer>
        <update-note v-if="update_note" :note="note"></update-note>
        <view-note v-else :note="note"></view-note>
        <div class="text-right mt-2" v-if="!update_note">
            <b-button variant="info" @click="toggleEditMode">Edit</b-button>
        </div>
    </b-modal>
</template>

<script>
import ViewNote from './ViewNote.vue';
import UpdateNote from './UpdateNote.vue';
import { EventBus } from "../../event-bus";

export default {
    components: {
        ViewNote,
        UpdateNote,
    },
    data() {
        return {
            update_note: false,
            note: {
                id: null,
                title: '',
                content: ''
            },
        }
    },
    created() {
        let self = this;
        EventBus.$on("viewNote", (note) => {
            self.note = note;
            self.showModal();
        });
    },
    methods: {
        showModal() {
            this.update_note = false;
            this.$bvModal.show("view-note-modal");
        },
        toggleEditMode() {
            this.update_note = true
        }
    }
}
</script>

<style>

</style>
