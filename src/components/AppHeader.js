import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = () => ({
  appBar: {
    width: 'calc(100% - 320px)',
    marginLeft: 320,
  },
});

const AppHeader = ({classes}) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>Reactive chat with Material UI</Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
