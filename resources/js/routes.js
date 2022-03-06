import VueRouter from "vue-router";

import { authGuard, guestGuard } from "./routes/guards";
import MainLayout from "./layout/Main.vue";
import AuthLayout from "./layout/auth/Main.vue";

// const Index = () => import("./pages/Index.vue");
// const AdminIndex = () => import("./pages/admin/Index.vue");
const Login = () => import("./pages/auth/LoginPage.vue");
const Register = () => import("./pages/auth/RegisterPage.vue");
const NotesIndex = () => import("./pages/notes/Indexpage.vue");


const routes = [
    {
        path: '/',
        component: MainLayout,
        beforeEnter: authGuard,
        children: [
            {
                path: '/',
                name: 'index',
                component: NotesIndex
            }
        ]
    },
    {
        path: '/login',
        component: AuthLayout,
        beforeEnter: guestGuard,
        children: [
            {
                path: '/',
                name: 'login',
                component: Login
            }
        ]
    },
    {
        path: '/register',
        component: AuthLayout,
        beforeEnter: guestGuard,
        children: [
            {
                path: '/',
                name: 'register',
                component: Register
            }
        ]
    }
//   { path: "*", component: NotFound },
];

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
