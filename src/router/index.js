import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Hobbies from "@/views/Hobbies.vue";
import Tasks from "@/views/Tasks.vue";
import Actitvities from "@/views/Actitvities.vue";
import Admin from "@/views/Admin.vue";

const routes = [
    { path: '/', component: Dashboard },
    { path: '/tasks', component: Tasks },
    { path: '/hobbies', component: Hobbies },
    { path: '/actitvities', component: Actitvities },
    { path: '/admin', component: Admin },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;