import React from "react";

export default function({ todoList, setTodoList }) {
  const handleDelete = (selectedTodo) => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.id !== selectedTodo)
    );
  };

  return (
    <div className="todolist">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo">
          {todo.todo}
          <button onClick={() => handleDelete(todo.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
