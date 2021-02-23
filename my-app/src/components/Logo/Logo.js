import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img
      className="h-100 w-auto"
      width="200"
      height="200"
      src={process.env.PUBLIC_URL + '/astronaut.png'}
      alt="astronaut"
    />
  </div>
);

export default logo;
