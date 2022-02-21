import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    event.keyCode === 27 && setSearchValue('');
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Buscar GOALS"
      value={searchValue}
      onChange={onSearchValueChange}
      onKeyDown={handleKeyDown}
    />,
  ];
}

export { TodoSearch };
