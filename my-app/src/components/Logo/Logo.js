import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={process.env.PUBLIC_URL + '/astronaut.png'} alt="astronaut" />
  </div>
);

export default logo;
