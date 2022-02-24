import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton intermitente" onClick={() => onClickButton()}>
      Crear GOAL❤️
    </button>
  );
}

export { CreateTodoButton };
