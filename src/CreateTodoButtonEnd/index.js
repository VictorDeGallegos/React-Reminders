import React from 'react';
import './CreateTodoButtonEnd.css';

function CreateTodoButtonEnd(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButtonEnd"
      onClick={() => onClickButton('Desarrollado por Victor Gallegos © 2022 copyright all right reserved')}
    >
      ℹ️
    </button>
  );
}

export { CreateTodoButtonEnd };
