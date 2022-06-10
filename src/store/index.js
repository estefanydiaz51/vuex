import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 150
    },
    getters: {
    },
    mutations: {
      // modifica el state
        incrementar(state, payload ) {
            state.contador = state.contador + payload;
        },
        disminuir( state, payload ) {
            state.contador = state.contador - payload;
        }
    },
    actions: {
      // acciona el state, las acciones ejecutan las mutaciones
        accionIncrementar({ commit }) {
            commit('incrementar', 10)
        },
        accionDisminuir({ commit }, numero) {
            commit('disminuir', numero)
        },
        accionBoton ( { commit }, objeto ){
            if ( objeto.estado ) {
                commit('incrementar', objeto.numero)
            }else {
                commit('disminuir', objeto.numero)
            }
        }
    },
    modules: {
    }
})
