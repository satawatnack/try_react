import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img
      className="h-100 w-auto"
      width="300"
      height="300"
      src={process.env.PUBLIC_URL + '/astronaut.png'}
      alt="astronaut"
    />
  </div>
);

export default logo;
