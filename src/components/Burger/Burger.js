import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => (
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      ))
    })
    .reduce((arr, el) => {
      return (arr.concat(el));
    }, []);
  // console.log(transformedIngredient);
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!</p>
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="burger-bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="burger-bread-bottom" />
    </div>
  );
};

export default burger;
