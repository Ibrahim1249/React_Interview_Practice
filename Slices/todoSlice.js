import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todo-slice",
    initialState:{
        name:'',
        todo:[]
    },
    reducers:{
        handleChange:(state,action)=>{
          state.name = action.payload
        },
        addTodo: (state,action)=>{
            state.todo = [...state.todo , {name:action.payload.name, id : action.payload.id}]
            state.name = ''
        },
        deleteTodo:(state,action)=>{
           
          let copyArray = [...state.todo];
          let filterArray = copyArray.filter((todo,index)=>{
             return todo.id !== action.payload
          })
          state.todo = filterArray
        }
        
    }
})

export default todoSlice.reducer;
export const {addTodo,deleteTodo , handleChange} = todoSlice.actions;