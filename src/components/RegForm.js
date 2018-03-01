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

class RegForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    },
    repeatedPassword: {
      value: '',
      isValid: true
    }
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;
    this.setState({
      password: {
        ...password,
        isValid
      },
      repeatedPassword: {
        ...repeatedPassword,
        isValid
      }
    });
    return isValid;
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
    if (!this.validate()) {
      return;
    }
    fetch('http://localhost:8000/v1/signup', {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    }).then(res => res.json()
    ).then(json => console.log(json)
    ).catch(err => console.log(err))
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          type="text"
          name="username"
          placeholder="Type username..."
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
          placeholder="Type password"
          type="password"
          autoComplete="new-password"
          margin="normal"
          value={password.value}
          onChange={this.handleInput}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat Password"
          name="repeatedPassword"
          className={classes.textField}
          placeholder="Type password again"
          type="password"
          autoComplete="new-password"
          margin="normal"
          value={repeatedPassword.value}
          onChange={this.handleInput}
          error={!repeatedPassword.isValid}
        />
        <Button variant="raised" type="submit" color="primary" className={classes.button} fullWidth>Sign Up</Button>
      </form>
    );
  }
}

export default withStyles(styles)(RegForm);
