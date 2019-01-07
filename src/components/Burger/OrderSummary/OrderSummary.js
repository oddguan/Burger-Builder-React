import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const map = {
    'burger-salad': 'Salad',
    'burger-bacon': 'Bacon',
    'burger-meat': 'Meat',
    'burger-cheese': 'Cheese'
  };

  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          {map[ingredientKey]}: {props.ingredients[ingredientKey]}
        </li> );
    });
    
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </>
  );
};

export default orderSummary;
