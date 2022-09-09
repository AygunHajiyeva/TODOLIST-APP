import React from 'react'

export default function ({ todoList, setTodoList }) {
  return (
    <div>
        {todoList.map((todo)=>(
           <div key={todo.id}>{todo.todo}</div>
        ))}
    </div>
  )
}
