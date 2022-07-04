import axios from 'axios'

export default {
    state: () => ({
        users: [],
    }),

    getters: {},

    mutations: {
        SET_USERS(state, payload) {
            state.users = payload
        },
        CREATE_NEW_USER(state, payload) {
            state.users = [...state.users, payload]
        },
        DELETE_USER(state, payload) {
            state.users = state.users.filter((user) => user.id !== payload)
        },
        UPDATE_USER(state, payload) {
            const index = state.users.findIndex(user => user.id === payload.id)
            if(index !== -1) {
              state.users.splice(index, 1, {
                id: payload.id,
                name: payload.name,
                email: payload.email,
                phone: payload.phone
              })
            }
        },
    },

    actions: {
        async getUsers({ commit }) {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            commit('SET_USERS', response.data)
        },
        async createNewUser({ commit }, payload) {
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/users',
                payload
            )
            commit('CREATE_NEW_USER', response.data)
            console.log(response.data)
        },
        async deleteUser({ commit }, payload) {
            const response = await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${payload}`
            )
            commit('DELETE_USER', payload)
            console.log(payload)
        },
        async updateUser({ commit }, payload) {
            const response = await axios.put(
                `https://jsonplaceholder.typicode.com/users/${payload.id}`
            )
            commit('UPDATE_USER', payload)
        },
    },
}
