<template>
  <div>
      <button @click="accionDisminuir(50)">{{ title }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        title: String
    },
    methods: {
        ...mapActions(['accionDisminuir'])
    }

}
</script>

<style>

</style>