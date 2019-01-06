import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'burger-salad'},
  { label: 'Bacon', type: 'burger'},
  { label: 'Meat', type: 'burger-meat'},
  { label: 'Cheese', type: 'burger-cheese'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
}

export default buildControls;
