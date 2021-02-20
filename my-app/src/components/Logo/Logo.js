import React from 'react';

import Logo from '../../assets/images/astronaut.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={Logo} alt="astronaut" />
  </div>
);

export default logo;
