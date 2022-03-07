import axios from "axios";
import config from "../constants/config";

const base_url = config.api_endpoint;
const app_url = config.app_endpoint;
let vuex = JSON.parse(localStorage.getItem('vuex'));

let api = axios.create({
  baseURL: base_url
});

if(vuex !== null) {
    if(vuex.auth !== null) {
        if(vuex.auth.is_authenticated) {
            api.defaults.headers.common['Authorization'] = `Bearer: ${vuex.auth.active_user.token}`
        }
    }
}

api.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true;
            localStorage.removeItem('vuex');
            window.location.href = `${app_url}/login`;
        }
    }
})

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
api.defaults.withCredentials = true;

export default api;
