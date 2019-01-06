import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class burgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch(this.props.type) {
      case('burger-bread-bottom'):
        ingredient = <div className={classes.BurgerBreadBottom}></div>;
        break;
      case('burger-bread-top'):
        ingredient = (
          <div className={classes.BurgerBreadTop}>
            <div className={classes.BurgerSeeds1}></div>
            <div className={classes.BurgerSeeds2}></div>
          </div>
        );
        break;
      case ('burger-meat'):
        ingredient = <div className={classes.BurgerMeat}></div>;
        break;
      case('burger-cheese'):
        ingredient = <div className={classes.BurgerCheese}></div>
        break;
      case('burger-salad'):
        ingredient = <div className={classes.BurgerSalad}></div>
        break;
      case('burger-bacon'):
        ingredient = <div className={classes.BurgerBacon}></div>
        break;
      default:
        ingredient = null;
    }
  
    return ingredient;
  }
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
