import vuex from 'vuex'
import Promise from 'core-js/features/promise'

export default () => {
    return new vuex.Store({
        state: {
            products: []
        },
        mutations: {
            SET_PRODUCT(state, products) {
                state.products = products
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
            }
        },
        getters: {}
    })
}