import React from 'react';

import classes from './SideDrawer.module.css';

const Logo = React.lazy(() => import('../../Logo/Logo'));
const NavigationItems = React.lazy(() =>
  import('../NavigationItems/NavigationItems')
);
const Backdrop = React.lazy(() => import('../../UI/Backdrop/Backdrop'));
const Auxx = React.lazy(() => import('../../../hoc/Auxx'));

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }

  return (
    <Auxx>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems clicked={props.closed2} />
        </nav>
      </div>
    </Auxx>
  );
};

export default SideDrawer;
