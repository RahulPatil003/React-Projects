import React from 'react'
import Todo from './Todo'
const TodoContainer = ({todos, deleteTodo}) => {
  return (
    <div>
      {todos.map((todo,index)=>{
        return(
          <Todo todo={todo} index={index}  deleteTodo={deleteTodo}/>
        )
      })}
    </div>
  )
}

export default TodoContainer
