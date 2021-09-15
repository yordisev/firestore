import { ref } from 'vue-demi'
import {db} from '../firebase'

export const useDB = () => {
        const referencia = db.collection('todos')
        const cargando = ref(false)

const getTodos = async () => {

    try {
        cargando.value = true
        const res = await referencia.get()
        return res.docs.map(doc =>({
            id: doc.id,
            ...doc.data()
        }))

    } catch (error) {
        return{
            error,
            res : true
        }
    } finally {
        cargando.value = false
    }
}

return {getTodos, cargando}

}