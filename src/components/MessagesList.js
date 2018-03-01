import React, { PureComponent } from 'react';
import {withStyles} from 'material-ui/styles';
import Message from './Message';


const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: '90px',
  },
});

class MessagesList extends PureComponent {
  componentDidMount() {
    this.scrollDownMessages();
  };
  componentDidUpdate() {
    this.scrollDownMessages();
  }
  scrollDownMessages = () => {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  };
  render () {
    const {classes, messages} = this.props;
    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => <Message key={index} {...message}/>)}
      </div>
    )
  }
}

export default withStyles(styles)(MessagesList);

