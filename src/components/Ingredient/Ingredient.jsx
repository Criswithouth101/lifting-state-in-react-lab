import React from 'react';

const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  return (
    <li style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px', listStyle: 'none' }}>
      {ingredient.name}
      <button onClick={onClick} style={{ marginLeft: '10px' }}>
        {buttonLabel}
      </button>
    </li>
  );
};

export default Ingredient;
