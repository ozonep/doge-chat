import React from 'react';
import {withStyles} from 'material-ui/styles';
import {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import titleInitials from "../utils/titles";

const styles = {};

const ChatsListItem = ({title}) => (
  <ListItem button>
    <Avatar>{titleInitials(title)}</Avatar>
    <ListItemText primary={title} secondary="active X hours"/>
  </ListItem>
);

export default withStyles(styles)(ChatsListItem);
