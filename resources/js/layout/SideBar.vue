<template>
    <div class="bg-primary main-sidebar" :class="active_class" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <div class="sidebar-icon">
            <b-link href="/">
                <b-img :src="template.bp_alt"></b-img>
            </b-link>
        </div>
        <div class="sidebar-tabs">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" push>
                        <b-icon-grid3x3-gap-fill></b-icon-grid3x3-gap-fill>
                        <span class="link-text">Dashboard</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :class="active_page.active == 'jobs' ? 'active' : ''" to="/jobs" push>
                        <b-icon-geo-alt-fill></b-icon-geo-alt-fill>
                        <span class="link-text">My Jobs</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/orders" push>
                        <b-icon-layers-fill></b-icon-layers-fill>
                        <span class="link-text">My Orders</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/drivers" push>
                        <b-icon-cursor-fill></b-icon-cursor-fill>
                        <span class="link-text">My Drivers</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/reports" push>
                        <b-icon-calendar2-fill></b-icon-calendar2-fill>
                        <span class="link-text">Reports</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/users" push>
                        <b-icon-person-badge-fill></b-icon-person-badge-fill>
                        <span class="link-text">Users</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/customers" push>
                        <b-icon-people-fill></b-icon-people-fill>
                        <span class="link-text">Customer Management</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import "@/assets/sass/layout/sidebar.scss";
import { EventBus } from "@/event-bus";
import { mapState } from "vuex";
import {template} from '@/constants/icons';

export default {
    data() {
        return {
            template: template,
            expanded_classes: ['block', 'expanded'],
            mobile_classes: ['mobile-sidebar'],
            active_class: [],
            is_expanded: false,
        }
    },
    created() {
        const self = this;
        EventBus.$on("toggleSidebar", () => {
            self.handleToggle();
        });
    },
    computed: mapState({
        active_page: state => state.template.active_page,
    }),
    methods: {
        handleMouseOver() {
            this.is_expanded = true;
            this.active_class = this.expanded_classes;
        },
        handleMouseLeave() {
            this.is_expanded = false;
            this.active_class = [];
        },
        handleToggle() {
            this.is_expanded = !this.is_expanded;
            if(this.is_expanded){
                this.active_class = this.expanded_classes;
            } else {
                this.active_class = [];
            }
        }
    }
}
</script>
