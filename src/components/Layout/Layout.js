import React, { Fragment, Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  siteDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  siteDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.siteDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.siteDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}
export default Layout;
