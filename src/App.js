import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="app">
      <h1>Todo List</h1>
      <p>Keep your life organized</p>
      
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
