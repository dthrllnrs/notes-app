import api from '../api/api';
import AuthUser from '../models/auth_user';

const auth_store = {
    namespaced: true,

    state: () => ({
        is_authenticated: false,
        active_user: {},
    }),

    mutations: {
        login(state, payload) {
            state.active_user = new AuthUser(payload.user, payload.access_token);
            state.is_authenticated = true;
        },

        logout(state) {
            state.active_user = null;
            state.is_authenticated = false;
        },
    },

    actions: {
        async login(context, payload) {
            return new Promise((resolve, reject) => {
                api.post('/auth/login', payload).then(res => {
                    context.commit('login', res.data.data);
                    resolve(res.data);
                }).catch(err => {
                    console.log(err.response);
                    reject(err.response);
                })
            })
        },
        async register(context, payload) {
            return new Promise((resolve, reject) => {
                api.post('/auth/register', payload).catch(err => {
                    console.log(err);
                    reject(err.response);
                }).then(res => {
                    console.log({res});
                    resolve(res.data);
                })
            })
        },
        async check() {
            return new Promise((resolve) => {
                api.get('/user/active-user').then(res => {
                    resolve(res.data);
                });
            })
        },

        logout(context) {
            return new Promise((resolve) => {
                context.commit('logout');
                resolve(1);
            })
        },
    }
}

export default auth_store;
