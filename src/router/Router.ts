import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import { getData } from "@/services/MainService";
import store from "../store/index";

const routes: RouteRecordRaw[] = [

    // MAIN
    {
        path: "/",
        name: "index",
        component: () => import("@/views/main/inicio-view.vue"),
        meta: {
            title: "asdas"
        }
    },
    {
        path: "/fundacion",
        name: "fundacion",
        component: () => import("@/views/main/fundation-view.vue"),
        meta: {
            title: "Fundación"
        }
    },
    {
        path: "/reglamentos",
        name: "reglamentos",
        component: () => import("@/views/main/reglamentos-view.vue"),
        meta: {
            title: "Reglamentos"
        }
    },
    {
        path: "/calendarios",
        name: "calendarios",
        component: () => import("@/views/main/calendarios-view.vue"),
        meta: {
            title: "Calendarios"
        }
    },
    // ANECDOTAS
    {
        path: "/crear/anecdota",
        name: "anecdotas-crear",
        component: () => import("@/views/main/anecdotas/newAnecdota-view.vue"),
        meta: {
            title: "Nueva Anécdota"
        }
    },
    {
        path: "/anecdotas",
        name: "anecdotas-first",
        component: () => import("@/views/main/anecdotas/anecdotas-view.vue"),
        meta: {
            title: "Anécdotas"
        }
    },
    {
        path: "/anecdotas/:id",
        name: "anecdotas-list",
        component: () => import("@/views/main/anecdotas/anecdotasList-view.vue"),
        meta: {
            title: "Anécdotas"
        }
    },
    {
        path: "/anecdota/:id",
        name: "anecdotas-profile",
        component: () => import("@/views/main/anecdotas/anecdota-profile.vue"),
        meta: {
            title: "Anécdota"
        }
    },

    // USERS
    {
        path: "/usuarios/iniciar-sesion",
        name: "signin",
        component: () => import("@/views/users/signin-view.vue"),
        meta: {
            title: "Iniciar sesión"
        }
    },
    {
        path: "/usuarios/registrarse",
        name: "signup",
        component: () => import("@/views/users/signup-view.vue"),
        meta: {
            title: "Registrarse"
        }
    },
    {
        path: "/perfil/:id",
        name: "profile",
        component: () => import("@/views/users/profiles/profile-view.vue"),
        meta: {
            title: ""
        }
    },

    // DESARROLLADOR
    // -- anecdotas --
    {
        path: "/dev/anecdotas",
        name: "dev-anecdotas",
        component: () => import("@/views/dev/anecdotas/anecdotasDev-view.vue"),
        meta: { title: "Anécdota", requiresOwner: true}
    },
    {
        path: "/dev/anecdotas/:id",
        name: "dev-anecdotas-profile",
        component: () => import("@/views/dev/anecdotas/anecdotaDev-profile-view.vue"),
        meta: { title: "Anécdota", requiresOwner: true}
    },

    // -- avisos principales --
    {
        path: "/dev/avisos-principales",
        name: "dev-avisos-principales",
        component: () => import("@/views/dev/avisosPrincipales/avisos-principales-view.vue"),
        meta: { title: "Avisos", requiresOwner: true}
    },
    {
        path: "/dev/avisos-principales/editar/:id",
        name: "dev-avisos-principales-profile",
        component: () => import("@/views/dev/avisosPrincipales/avisos-principales-profile-view.vue"),
        meta: { title: "Avisos", requiresOwner: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    to.meta.title ? document.title = `${to.meta.title} | Prepa 2030` : document.title = `Prepa 2030`
    
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (store.state.connected) {
            next()
        } else {
            const res = await getData()
            if (res.data) {
                next()
            } else {
                next("/usuarios/iniciar-sesion")
            }
        }
    } else if (to.matched.some(route => route.meta.requiresOwner)) {
        if (store.state.connected && store.state.user.owner) {
            next()
        } else {
            const res = await getData()
            if (res.data.owner && res.data.user) {
                next()
            } else {
                next("/usuarios/iniciar-sesion")
            }
        }
    } else {
        next()
    }
})

export default router