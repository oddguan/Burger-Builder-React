import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        'burger-salad': 0,
        'burger-bacon': 0,
        'burger-cheese': 0,
        'burger-meat': 0,
      }
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </>
    );
  }
}

export default BurgerBuilder;
