import api from '../api/api';
import Note from '../models/note';

const notes_store = {
    namespaced: true,

    state: () => ({
        notes: [],
    }),

    mutations: {
        setNotes(state, payload) {
            state.notes = [];
            payload.forEach(note => {
                state.notes.push(new Note(note));
            });
        },
        clearNotes(state) {
            state.notes = [];
        }
    },

    actions: {
        async clearNotes(context) {
            return new Promise((resolve, reject) => {
                context.commit('clearNotes');
                resolve(1);
            })
        },
        async fetchNotes(context) {
            return new Promise((resolve, reject) => {
                api.get('/notes').then(res => {
                    context.commit('setNotes', res.data.data);
                    resolve(res.data);
                }).catch(err => {
                    console.log(err.response);
                    reject(err.response);
                })
            })
        },
        async update(context, payload) {
            return new Promise((resolve, reject) => {
                api.post(`/notes/update/${payload.id}`, payload).then((res) => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err.response);
                })
            })
        },
        async create(context, payload) {
            return new Promise((resolve, reject) => {
                api.post(`/notes/create`, payload).then((res) => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err.response);
                })
            })
        },
        async delete(context, id) {
            return new Promise((resolve, reject) => {
                api.post(`/notes/delete/${id}`).then((res) => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err.response);
                })
            })
        },
    }
}

export default notes_store;
