import React, { Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSidedrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({showSidedrawer: false});
  };

  sideDrawerOpenHandler = () => {
    this.setState({showSidedrawer: true});
  };

  render() {
    return (
      <>
        <Toolbar
        open={this.state.showSidedrawer}
        opened={this.sideDrawerOpenHandler} />
        <SideDrawer 
        open={this.state.showSidedrawer} 
        closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
    </>
    )
  }
}

export default Layout;
