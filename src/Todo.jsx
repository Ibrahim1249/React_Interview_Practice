import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addTodo , deleteTodo , handleChange } from '../Slices/todoSlice';

function Todo() {
    const dispatch = useDispatch();
    const initialState = useSelector(state=> state)

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addTodo({name:initialState.name , id : Date.now()}))

    }
  return (
    <>
      <div className="container">
         <form action="" onSubmit={handleSubmit}>
            <input type="text" value={initialState.name} placeholder='Enter todo item' onChange={(e)=>{dispatch(handleChange(e.target.value))}}/>
            <input type="submit" value="Add Todo" />
         </form>

         <div className="output">
            <ul>
               {initialState.todo.map((todo,index)=>{
                 return <div>
                   <li key={index}>{todo.name}</li>
                   <button onClick={()=>{dispatch(deleteTodo(todo.id))}}>delete</button>
                 </div>
               })}
            </ul>
         </div>
      </div>
    </>
  )
}

export default Todo