import React from 'react';
import './Titulo.css';

function Titulo({ children, loading }) {
  return (
    <header className=" app-header">
      <h1 className="Titulo">GOALS ❤️</h1>
      {React.Children.toArray(children).map((child) => React.cloneElement(child, { loading }))}
    </header>
  );
}
export { Titulo };
