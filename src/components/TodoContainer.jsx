import React from "react";
import TodoItem from "./TodoItem";

function TodoContainer(props) {
  const { todos, onEdit, onDelete } = props;

  return (
    <div className="todo-container">
      {todos.map((el) => (
        <TodoItem key={el.id} job={el} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoContainer;
