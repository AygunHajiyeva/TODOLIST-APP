import React from "react";

export default function({ todoList, setTodoList }) {
  const handleDelete = (selectedTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== selectedTodo)
    );
  };

  const handleIsComplete = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const handleEdit = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        
      )
    );
  };

  return (
    <div className="todolist">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="todo"
          style={todo.isComplete ? { textDecorationLine: "line-through", opacity:0.8 } : {}}
        >
          {todo.todo}
          <div className="btn-section">
            <input
              type="checkbox"
              value={todo.isComplete}
              onChange={() => handleIsComplete(todo.id)}
              className="checkbox"
            />
            <button className="trash" onClick={() => handleDelete(todo.id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
            <button className="edit-btn" onClick={()=>handleEdit(todo.id)}>
              edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
