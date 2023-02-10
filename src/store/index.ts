import { User } from "@/Interfaces/User";
import { UserComplete } from "@/Interfaces/UserComplete";
import { useRoute } from "vue-router";
import { createStore } from "vuex";

export default createStore({
    state: {
        connected: false,
        night: false,
        user: {} as UserComplete,
        userStudent: {
            connected: false,
            fees: ""
        },
        urlPdf: "https://server.daraan.site/pdf",
        hideInterface: false,
        hideFooter: false
    },
    getters: {
        night(state) {
            return state.night
        },
        connected(state) {
            return state.connected
        },
        isOwner(state) {
            return state.user.owner
        },
        urlPdf(state) {
            return state.urlPdf
        },
        hideInterface(state) {
            return state.hideInterface
        },
        hideFooter(state) {
            return state.hideFooter
        }
    },
    mutations: {
        ["SWITCH_CONNECTED"](state) {
            if (state.connected) {
                state.connected = false
            } else {
                state.connected = true
            }
        },
        ["LOGIN"](state, userData:UserComplete) {
            state.user = userData
            state.connected = true
        },
        ["SET_CONNECT"](state) {
            state.connected = true 
        },
        ["SET_DISCONNECT"](state) {
            state.connected = false 
        },
        ["SWITCH_NIGHT"](state) {
            if (state.night) {
                localStorage.removeItem("night")
                document.body.classList.remove("night-bg")
                state.night = false
            } else {
                state.night = true
                localStorage.setItem("night", "existe")
                document.body.classList.add("night-bg")
            }
        },
        ["SET_NIGHT"](state) {
            state.night = true
        },
    },
    actions: {
        switchConnectedAction: (context) => {
            context.commit("SWITCH_CONNECTED")
        },
        switchNightAction: (context) => {
            context.commit("SWITCH_NIGHT")
        },
        LoginAction: (context, user:UserComplete) => {
            context.commit("LOGIN", user)
        },
        setConnectedAction: (context) => {
            context.commit("SET_CONNECT")
        },
        setDisconnectedAction: (context) => {
            context.commit("SET_DISCONNECT")
        },
        setNightAction: (context) => {
            context.commit("SET_NIGHT")
        }
    },
    modules: {
    
    }
})