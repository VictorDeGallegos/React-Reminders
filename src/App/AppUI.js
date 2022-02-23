import React from 'react';
import './App.css';
import { Titulo } from '../Titulo';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
// import { CreateTodoButtonEnd } from '../CreateTodoButtonEnd';
import { Modal } from '../Modal';

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <Titulo />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <img src="https://media.giphy.com/media/hp3dmEypS0FaoyzWLR/giphy.gif" alt="Error" class="center" />}
        {error && <p className="error">Desespérate, hubo un error...</p>}
        {loading && <img src="https://media.giphy.com/media/Iblv3w6yvj9DTMwCsJ/giphy.gif" alt="Cargando" class="center" />}
        {loading && <h2 className="cargando">Estamos cargando sus GOALS...</h2>}
        {!loading && !searchedTodos.length && (
          <img src="https://media.giphy.com/media/USUIWSteF8DJoc5Snd/giphy.gif" alt="Sin goals" class="center" />
        )}
        {!loading && !searchedTodos.length && (
          <h1 className="primergoal">Parece que no hay nada por aqui... ¿Por qué no creas un nuevo GOAL? </h1>
        )}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      {/* <CreateTodoButtonEnd /> */}
    </React.Fragment>
  );
}

export { AppUI };
