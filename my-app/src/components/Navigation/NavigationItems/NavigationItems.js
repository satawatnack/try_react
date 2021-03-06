import React from 'react';

import classes from './NavigationItems.module.css';

const NavigationItem = React.lazy(() =>
  import('./NavigationItem/NavigationItem')
);

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
