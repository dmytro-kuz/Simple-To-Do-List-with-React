import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodoCompleted }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
