<template>
    <b-modal id="add-note-modal" title="Add Note" hide-footer>
        <validation-observer ref="form" v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)">
                <validation-provider name="Title" vid="title" rules="max:20" v-slot="{errors, valid, dirty}">
                    <b-form-group label="Title ">
                        <b-form-input v-model="payload.title" autofocus placeholder="Enter note title here" :state="dirty ? valid : null"></b-form-input>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
                <validation-provider name="Content" vid="content" rules="required" v-slot="{errors, valid, dirty}">
                    <b-form-group label="Content *">
                        <b-form-textarea placeholder="Enter note content here" required v-model="payload.content" rows="3" max-rows="6" :state="dirty ? valid : null"></b-form-textarea>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                </validation-provider>
                <div class="text-right">
                    <b-button type="submit" variant="info">Save</b-button>
                </div>
            </b-form>
        </validation-observer>
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
    mounted() {
        let self = this;
        this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            self.resetForm();
        })
    },
    methods: {
        resetForm() {
            this.payload.title = '';
            this.payload.content = '';
        },
        onSubmit() {
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
                if(err.status == 422) {
                    this.$refs.form.setErrors(err.data.errors);
                }
                this.$bvToast.toast(err.data.message || 'Error Please try again later.', {
                    title: "Add Note Failed",
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
