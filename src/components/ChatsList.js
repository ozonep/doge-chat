import React from 'react';
import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import ChatsListItem from './ChatsListItem';

const styles = {
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
};

const ChatsList = ({classes, chats}) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ChatsListItem key={index} {...chat}/>
    ))}
  </List>
);


export default withStyles(styles)(ChatsList);
