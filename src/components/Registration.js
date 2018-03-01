import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import LoginForm from './LoginForm';
import RegForm from './RegForm';

const styles = theme => ({
  paper: {
    width: 500,
    marginTop: theme.spacing.unit * 6,
    backgroundColor: theme.palette.background.paper,
  },
});

class Registration extends React.Component {
  state = {
    activeTab: 0,
  };

  handleChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;
    return (
      <Grid container justify="center">
        <Grid item >
          <Paper className={classes.paper}>
            <AppBar position="static" color="default">
              <Tabs value={activeTab} onChange={this.handleChange} fullWidth>
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {activeTab === 0 && <LoginForm/>}
            {activeTab === 1 && <RegForm/>}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Registration);
