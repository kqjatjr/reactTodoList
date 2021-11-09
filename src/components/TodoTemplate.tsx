import React from "react";
// import "./TodoTemplate.scss";

const TodoTemplate = (props: { children: string }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default TodoTemplate;
