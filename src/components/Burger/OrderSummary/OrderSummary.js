import React, { Component }from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component
  // Doesn't have to be a stateful component
  componentWillUpdate() {
    console.log('WillUpdate');
  };

  render() {
    const map = {
      'burger-salad': 'Salad',
      'burger-bacon': 'Bacon',
      'burger-meat': 'Meat',
      'burger-cheese': 'Cheese'
    };
  
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingredientKey => {
        return (
          <li key={ingredientKey}>
            {map[ingredientKey]}: {this.props.ingredients[ingredientKey]}
          </li> );
      });
      
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
      </>
    );
  }
}

export default OrderSummary;
