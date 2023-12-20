import {createSlice} from '@reduxjs/toolkit'

const toDoSlice = createSlice({
    name:'todo',
    initialState:{list:[]},
    reducers:{
        addTodo(state,action){
            state.list.push(action.payload)
        },
        removeItem(state,action){
            state.list = state.list.filter((todo)=>todo.id != action.payload.id)
        }
    }
})

const {actions,reducer} = toDoSlice

export const {addTodo,removeItem} = actions

export default reducer