import { ref, Ref } from 'vue'

export const useCounter: Function = () => {
    // States
    const counter: Ref<number> = ref<number>(0)

    // Methods
    const increment: Function = () => {
        counter.value++
    }
    const decrement: Function = () => {
        counter.value--
    }

    // Return
    return {
        counter,
        increment,
        decrement
    }
}
