<template>
    <div>
        <b-row>
            <b-col cols="12" md="4" offset-md="4">
                <b-form-group>
                    <b-form-input @click="addNote" readonly placeholder="Click here to add note"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" sm="6" md="4" lg="3" v-for="note in notes" :key="note.id" >
                <note-card :note="note"></note-card>
            </b-col>
        </b-row>
        <notes-modal></notes-modal>
        <add-note-modal></add-note-modal>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus';
import { mapState } from 'vuex'
import NoteCard from '../../components/notes/NotesCard.vue'
import NotesModal from '../../components/notes/NotesModal.vue'
import AddNoteModal from '../../components/notes/AddNoteModal.vue'
export default {
    components: {
        NoteCard,
        NotesModal,
        AddNoteModal,
    },
    data() {
        return {

        }
    },
    computed: mapState({
        notes: state => state.notes.notes
    }),
    created() {
        this.fetchNotes();
    },
    methods: {
        fetchNotes() {
            EventBus.$emit('showLoading');
            this.$store.dispatch('notes/fetchNotes').catch(err => {
                this.$bvToast.toast(err.message || 'Error Please try again later.', {
                    title: "Something went wrong.",
                    variant: "danger",
                    solid: true,
                });
            }).finally(() => {
                EventBus.$emit('hideLoading');
            })
        },
        addNote() {
            this.$bvModal.show("add-note-modal");
        }
    }
}
</script>

<style>

</style>
