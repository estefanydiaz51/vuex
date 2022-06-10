<template>
    <div class="home">
        <!-- <h1>Mi contador: {{ $store.state.contador}}</h1> -->
        <h1
            :style="colorContador"
        >
            {{ titulo }}: {{ contador }}
        </h1>
        <button
            @click="accionIncrementar"
        >
            Aumentar
        </button>
        <BtnDisminuir 
            title="Disminuir"
        ></BtnDisminuir>
        <hr>
        <BtnAccion  :estado="true"></BtnAccion>
        <BtnAccion  :estado="false"></BtnAccion>

    </div>
</template>

<script>
import BtnAccion from '../components/BtnAccion'
import BtnDisminuir from '../components/BtnDisminuir'
import { mapState, mapMutations, mapActions } from 'vuex'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {
    BtnAccion,
        BtnDisminuir,
    },
    data() {
        return {
            titulo: 'Mi contador Vuex'
        }
    },
    computed: {
        ...mapState(['contador']),
        colorContador (){
            return [this.contador > 100 ? {'color': 'green'}: {'color': 'red'}]
        }
    },
    methods: {
        ...mapMutations( ['incrementar']),
        ...mapActions(['accionIncrementar'])
    }
    
}
</script>
