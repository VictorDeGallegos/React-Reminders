import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Han completado {completed} de {total} GOALS
    </h2>
  );
}

export { TodoCounter };
