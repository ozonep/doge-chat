import React from 'react';
import {withStyles} from 'material-ui/styles';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import Chat from './Chat';
import {chats, messages} from "../mock";

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    display: 'flex',
  }
};

const ChatPage = ({classes}) => (
  <div className={classes.root}>
    <AppHeader/>
    <Sidebar chats={chats}/>
    <Chat messages={messages}/>
  </div>
);

export default withStyles(styles)(ChatPage);
