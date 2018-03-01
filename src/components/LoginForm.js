import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 3
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3
  },
});

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    }
  };

  handleInput = (e) => {
    e.persist();
    const { name, value} = e.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          type="text"
          name="username"
          placeholder="Type your username..."
          className={classes.textField}
          autoComplete="username"
          value={username.value}
          onChange={this.handleInput}
          error={!username.isValid}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          className={classes.textField}
          placeholder="Type your password..."
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={password.value}
          onChange={this.handleInput}
          error={!password.isValid}
        />
        <Button variant="raised" type="submit" color="primary" className={classes.button} fullWidth>Login</Button>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
