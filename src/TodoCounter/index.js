import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  React.useEffect(() => {
    totalTodos - completedTodos > 0
      ? (document.title = `${totalTodos - completedTodos} ${totalTodos - completedTodos === 1 ? 'GOAL pendiente' : 'GOALS pendientes'}`)
      : (document.title = `GOALS`);
  }, [totalTodos, completedTodos]);
  return (
    <h2 className="TodoCounter">
      {(completedTodos === 0) & (totalTodos === 0)
        ? 'No  tienen GOALS pendientes'
        : totalTodos === completedTodos
        ? 'Han completado todos sus GOALS 😍'
        : `Han completado ${completedTodos} de ${totalTodos} Goals`}
    </h2>
  );
}

export { TodoCounter };
