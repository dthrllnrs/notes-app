import axios from "axios";
import config from "../constants/config";

const base_url = config.api_endpoint;
let auth = JSON.parse(localStorage.getItem('vuex')).auth;

let api = axios.create({
  baseURL: base_url
});
if(auth.is_authenticated) {
    api.defaults.headers.common['Authorization'] = `Bearer: ${auth.active_user.token}`
}

api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
api.defaults.withCredentials = true;

export default api;
