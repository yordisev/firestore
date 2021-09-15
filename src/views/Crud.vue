<template>
<div v-if="isAuthenticated">

  <h1>Crud</h1>
  <Cargando v-if="cargando"/>
  <div v-else>
    <Error v-if="pintarError"/>
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
import Error from '../components/Error.vue'
import { computed, onMounted, provide, ref } from 'vue-demi'
export default {
  components:{
    Cargando,
    Error
  },
setup(){
  const {isAuthenticated} = useAuth()
  const {getTodos, cargando} = useDB()
  const todos = ref([])
  const error = ref(null)
  provide('error', error)
  const pintarError = computed(() => error.value ? true : false)
  onMounted(async() => {
    todos.value = await getTodos()
    if (todos.value.res){
      console.log(todos.value.error)
      error.value = todos.value.error
    }
  })
  return {isAuthenticated, todos, cargando, pintarError}
}
}
</script>

<style>

</style>