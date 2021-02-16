import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Home
    </NavigationItem>
    <NavigationItem link="/launches">Launches</NavigationItem>
    <NavigationItem link="/rockets">Rockets</NavigationItem>
  </ul>
);

export default NavigationItems;
