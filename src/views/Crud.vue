<template>
<div v-if="isAuthenticated">

  <h1>Crud</h1>
  <Cargando v-if="cargando"/>
  <div v-else>
    <pre>
      {{todos}}
    </pre>
  </div>
</div>
</template>

<script>
import {useAuth} from '@vueuse/firebase'
import {useDB} from '../composables/useDB'
import Cargando from '../components/Cargando.vue'
import { onMounted, ref } from 'vue-demi'
export default {
  components:{
    Cargando
  },
setup(){
  const {isAuthenticated} = useAuth()
  const {getTodos, cargando} = useDB()
  const todos = ref([])

  onMounted(async() => {
    todos.value = await getTodos()
  })
  return {isAuthenticated, todos, cargando}
}
}
</script>

<style>

</style>