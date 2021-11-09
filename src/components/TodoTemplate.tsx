import React from "react";
import "../CSS/TodoTemplate.scss";

type props = {
  children: JSX.Element;
};

const TodoTemplate = (props: props) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default TodoTemplate;
