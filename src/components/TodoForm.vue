<template>
  <form @submit.prevent="procesarFormulario">
      <input type="text" 
      placeholder="Enter para agregar todo"
      class="form-control my-3"
      v-model.trim="texto"
      >
  </form>
</template>

<script>
import { inject, ref } from 'vue-demi'
import { useDB } from '../composables/useDB'
export default {
    setup(){
        const {agregarTodo} = useDB()
        const texto = ref('')
        const todos = inject('todos')
        const error = inject('error')

        const procesarFormulario = async() => {

            if(!texto.value.trim()){
                console.log('texto vacio')
            }

            const todo = await agregarTodo(texto.value)


                if (todo.res) {
                    error.value = todo.error
                    texto.value = ''
                    return
                }

            todos.value = [...todos.value, todo]
            texto.value = ''

        }

        return {texto, procesarFormulario}
    },

}
</script>

<style>

</style>