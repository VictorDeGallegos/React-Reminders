import React from 'react';
import './CreateTodoButtonEnd.css';

function CreateTodoButtonEnd(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button className="CreateTodoButtonEnd" onClick={() => onClickButton('Aquí se debería Esconder los GOALS terminados')}>
      👁
    </button>
  );
}

export { CreateTodoButtonEnd };
