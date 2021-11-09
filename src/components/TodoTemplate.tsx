import React, { PropsWithChildren } from "react";
import "../CSS/TodoTemplate.scss";

const TodoTemplate = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
