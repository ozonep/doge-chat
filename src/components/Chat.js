import React from 'react';
import {withStyles} from 'material-ui/styles';
import MessageInput from './MessageInput';
import MessagesList from './MessagesList';

const styles = theme => ({
  chatContent: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundImage: 'url("tinybackground.jpg")',
    backgroundRepeat: 'repeat',
    padding: theme.spacing.unit * 3,
    paddingTop: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: '90px',
  },
});

const Chat = ({classes, messages}) => (
      <main className={classes.chatContent}>
        <MessagesList messages={messages}/>
        <MessageInput/>
      </main>
);

export default withStyles(styles)(Chat);
