import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ChatsList from './ChatsList';
import BottomNav from './BottomNav';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
  },
  leftTopToolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
});

const Sidebar = ({classes, chats}) => (
    <Drawer variant="permanent" classes={{paper: classes.drawerPaper}} anchor='left'>
      <div className={classes.leftTopToolbar}>
        <TextField id="search" fullWidth placeholder="Search chats" type="search" margin="normal"/>
      </div>
      <Divider/>
      <ChatsList chats={chats}/>
      <Button variant="fab" color="primary" aria-label="add" className={classes.newChatButton}>
        <AddIcon />
      </Button>
      <BottomNav/>
    </Drawer>
  );

export default withStyles(styles)(Sidebar);
