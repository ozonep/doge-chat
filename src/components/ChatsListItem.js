import React from 'react';
import {withStyles} from 'material-ui/styles';
import {ListItem, ListItemText} from 'material-ui/List';
import Avatar from './Avatar';

const styles = {};

const ChatsListItem = ({title}) => (
  <ListItem button>
    <Avatar colorId={title}>{title}</Avatar>
    <ListItemText primary={title} secondary="active X hours"/>
  </ListItem>
);

export default withStyles(styles)(ChatsListItem);
