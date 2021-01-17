import vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () => {
    return new vuex.Store({
        state: {
            products: [],
            productItem: [],
            users: [],
            userItem: [],
            carts: []
        },
        mutations: {
            SET_PRODUCT(state, products) {
                state.products = products
            },
            SET_PRODUCTITEM(state, productItem){
                state.productItem = productItem
            },
            SET_USER(state, users){
                state.users = users
            },
            SET_USERITEM(state, userItem){
                state.userItem = userItem
            },
            SET_CARTS(state, carts){
                state.carts = carts
            }
        },
        actions: {
            product({ commit }) {
                return new Promise((resolve, reject) => {
                    this.$axios.get('https://fakestoreapi.com/products')
                        .then((resp) => {
                            commit('SET_PRODUCT', resp.data)
                            resolve()
                        })
                        .catch((err) => {
                            console.log(err, statusProduct);
                        })
                })
            },

            productItem({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios({
                        url: `https://fakestoreapi.com/products/${id}`
                    })
                    .then((resp)=>{
                        commit('SET_PRODUCTITEM', resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusGetProduct);
                    })
                })
            },
            
            users({commit}){
                return new Promise((resolve, reject) =>{
                    this.$axios({
                        url: 'https://fakestoreapi.com/users'
                    })
                    .then((resp)=>{
                        commit("SET_USER", resp.data)
                        resolve()
                    })
                    .catch((err) =>{
                        console.log(err, statusUsers);
                    })
                })
            },

            userItem({commit}, {id}){
                return new Promise((resolve, reject) =>{
                    this.$axios({
                        url: `https://fakestoreapi.com/users/${id}`
                    })
                    .then((resp)=>{
                        commit("SET_USERITEM", resp.data)
                        resolve()
                    })
                    .catch((err)=>{
                        console.log(err, statusUserItem);
                    })
                })
            },
            
        },
        getters: {}
    })
}