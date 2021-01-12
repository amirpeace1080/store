import vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () => {
    return new vuex.Store({
        state: {
            products: [],
            productItem: [],
        },
        mutations: {
            SET_PRODUCT(state, products) {
                state.products = products
            },
            SET_PRODUCTITEM(state, productItem){
                state.productItem = productItem
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
            }
        },
        getters: {}
    })
}