import { Student } from "@/Interfaces/StudentData";
import { User } from "@/Interfaces/User";
import { UserComplete } from "@/Interfaces/UserComplete";
import { useRoute } from "vue-router";
import { createStore } from "vuex";

export default createStore({
    state: {
        connected: false,
        night: false,
        user: {} as UserComplete,
        userStudent: {} as Student,
        urlPdf: "http://localhost:3000/pdf",
        hideInterface: false,
        hideFooter: false,
        chartDataScores: {
            titles: [] as string[],
            scoresStudent: [] as string[],
            scoresGroup: [] as string[],
            totalStudent: 0,
            totalGroup: 0
        }
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
        },
        studentFees(state) {
            return state.userStudent.fees
        },
        studentConnected(state) {
            return state.userStudent.connected
        },
        studentSubjects(state) {
            return state.userStudent.subjects
        },
        studentFirstName(state) {
            let name = ""
            if (state.userStudent.firstName != "") name = state.userStudent.firstName[0].toUpperCase() + state.userStudent.firstName.substring(1)
            return name
        },
        studentLastNameF(state) {
            let name = ""
            if (state.userStudent.lastNameF != "") name = state.userStudent.lastNameF[0].toUpperCase() + state.userStudent.lastNameF.substring(1)
            return name
        },
        chartDataScoreStudent(state) {
            return state.chartDataScores.scoresStudent
        },
        chartDataScoreGroup(state) {
            return state.chartDataScores.scoresGroup
        },
        chartDataTotalStudent(state) {
            return state.chartDataScores.totalStudent
        },
        chartDataTotalGroup(state) {
            return state.chartDataScores.totalGroup
        },
        studentStatus(state) {
            return state.userStudent.status
        },
        studentStatusActualization(state) {
            return state.userStudent.actualizationStatus
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
        ["LOGIN"](state, userData: UserComplete) {
            state.user = userData
            state.connected = true
        },
        ["LOGIN_STUDENT"](state, studentData: Student) {
            state.userStudent = studentData
            state.userStudent.connected = true
            const subjects = state.userStudent.subjects as any
            state.chartDataScores.scoresStudent = []
            state.chartDataScores.scoresGroup = []
            for (let i=0; i < 8; i++) {
                const subject = subjects[i] 
                state.chartDataScores.titles.push(subject[0])

                let j = 0
                do {
                    j++
                } while (subject[j]);

                if (j < 9) {
                    state.chartDataScores.scoresStudent.push(subject[j-1])
                    state.chartDataScores.scoresGroup.push(subject[j])
                } else {
                    state.chartDataScores.scoresStudent.push(subject[9])
                    state.chartDataScores.scoresGroup.push(subject[10])
                }
            }

            let totalStudent = 0
            let totalGroup = 0
            for (let i=0; i < 8; i++) {
                totalStudent += parseInt(state.chartDataScores.scoresStudent[i])
                totalGroup += parseInt(state.chartDataScores.scoresGroup[i])
            }
            state.chartDataScores.totalStudent = parseFloat((totalStudent/8).toFixed(1))
            state.chartDataScores.totalGroup = parseFloat((totalGroup/8).toFixed(1))

            //console.log(state.userStudent)
        },
        ["LOGOUT_STUDENT"](state) {

            const clear:Student = {
                fees: "",
                actualizationStatus: "",
                firstName: "",
                secondName: "",
                lastNameF: "",
                lastNameS: "",
                subjects: {},
                status: {}
            }

            state.chartDataScores.titles = []
            state.chartDataScores.scoresStudent = []
            state.chartDataScores.scoresGroup = []
            state.chartDataScores.totalStudent = 0
            state.chartDataScores.totalGroup = 0

            state.userStudent = clear
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
        LoginStudentAction: (context, student: Student) => {
            context.commit("LOGIN_STUDENT", student)
        },
        LogoutStudentAction: (context) => {
            context.commit("LOGOUT_STUDENT")
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