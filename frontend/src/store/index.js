import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: null,
        drawerhome: false,
        alert: {
            snackbar: null,
            color: null,
            timeout: null,
            text: null,
        },
    },
    mutations: {
        ALERT(state, payload) {
            state.alert = {
                snackbar: payload.snackbar,
                color: payload.color,
                timeout: payload.timeout,
                text: payload.text
            }

        },
        CLOSE_ALERT(state, payload) {
            state.alert.snackbar = payload
        },
    },
    actions: {
        alert({ commit }, data) {
            commit('ALERT', data)
        },
        closeAlert({ commit }, data) {
            commit('CLOSE_ALERT', data)
        },
    },
    modules: {
        employees
    },
})
