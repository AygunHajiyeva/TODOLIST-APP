import React from "react";

export default function({ todoList, setTodoList }) {
  const handleDelete = (selectedTodo) => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.id !== selectedTodo)
    );
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.todo}
          <button onClick={() => handleDelete(todo.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
