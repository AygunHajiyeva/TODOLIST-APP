import React from 'react'
import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList';



export default function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
  return (
    <div>
        <h1>Todolist</h1>
        <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
        <TodoList  todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}
