import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ todo, setTodo, todoList, setTodoList }) {
  const addTodoList = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: uuidv4(), todo: todo, isComplete: false }]);
    setTodo("");
  };

  return (
    <form onSubmit={addTodoList}>
      <input
        type="text"
        placeholder="enter any todo..."
        required
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
