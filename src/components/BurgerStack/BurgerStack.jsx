import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onClick={() => onRemove(index)}
              buttonLabel="X"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;

