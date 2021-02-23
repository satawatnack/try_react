import React, { Component } from 'react';

import classes from './Layout.module.css';

const Auxx = React.lazy(() => import('../../hoc/Auxx'));
const Toolbar = React.lazy(() =>
  import('../../components/Navigation/Toolbar/Toolbar')
);
const SideDrawer = React.lazy(() =>
  import('../../components/Navigation/SideDrawer/SideDrawer')
);

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxx>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
          closed2={this.SideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxx>
    );
  }
}

export default Layout;
