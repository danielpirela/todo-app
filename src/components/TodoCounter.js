import React from 'react';
import './styles/TodoCounter.css';

function TodoCounter({total, completed}) {

  return (
    <h2 className="TodoCounter"> completado {completed} de {total} TODOs</h2>
  );
}
export { TodoCounter };
