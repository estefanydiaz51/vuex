<template>
    <div class="about">
        <h1>Mi contador: {{ $store.state.contador}}</h1>
        <input type="" name="" v-model="texto">
        <h2>Texto: {{ texto }}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                texto: ''
            }
        },
    }
</script>
