import React from "react";

export default function({ todoList, setTodoList }) {
  const handleDelete = (selectedTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== selectedTodo)
    );
  };

  const handleIsComplete = (id) => {
    setTodoList((prevTodoList) => prevTodoList.map((item) => item.id === id ? {...item, isComplete:!item.isComplete} :item));
    
  };
  

  return (
    <div className="todolist">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo" style={todo.isComplete ? {textDecorationLine: 'line-through'}:{}}>
          {todo.todo}
          <button onClick={() => handleDelete(todo.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
          <input
            type="checkbox"
            value={todo.isComplete}
            onChange={() => handleIsComplete(todo.id)}
            
          />
        </div>
      ))}
    </div>
  );
}
