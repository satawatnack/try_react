import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" clickedFromNav={props.clicked} exact>
      Home
    </NavigationItem>
    <NavigationItem link="/launches" clickedFromNav={props.clicked}>
      Launches
    </NavigationItem>
    <NavigationItem link="/rockets" clickedFromNav={props.clicked}>
      Rockets
    </NavigationItem>
  </ul>
);

export default NavigationItems;
