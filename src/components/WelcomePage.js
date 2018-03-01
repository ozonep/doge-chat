import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Registration from './Registration';

const styles = {
  // root: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   flexDirection: 'column'
  // },
};

const WelcomePage = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">Reactive chat with Material UI</Typography>
      </Toolbar>
    </AppBar>
    <Registration/>
  </>
);

export default withStyles(styles)(WelcomePage);
