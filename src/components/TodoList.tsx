import React from "react";
import TodoListItem from "./TodoListItem";
import "../CSS/TodoList.scss";
import { todosType } from "../Types/types";

const TodoList = ({
  todos,
  onRemove,
  onToggle,
}: {
  todos: todosType[];
  onRemove: Function;
  onToggle: Function;
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
