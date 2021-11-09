import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../CSS/TodoInsert.scss";

const TodoInsert = ({ onInsert }: { onInsert: Function }) => {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    // button의 onClick={} 으로도 만들수 있지만 form의 이벤트를 사용하면
    // 따로 Enter키를 설정하지 않아도 Enter키를 지원한다.
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
