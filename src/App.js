import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import PersonIcon from 'material-ui-icons/PersonPin';
import HotIcon from 'material-ui-icons/Whatshot';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import {chats, messages} from './mock';


const drawerWidth = 320;

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  leftTopToolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
  chatContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingTop: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflowY: 'scroll',
  },
  messageInputWrapper: {
    position: 'fixed',
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: '90px',
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit,
    backgroundColor: '#e6dcff'
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>Reactive chat with Material UI</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}} anchor='left'>
          <div className={classes.leftTopToolbar}>
            <TextField
              id="search"
              fullWidth
              placeholder="Search chats"
              type="search"
              margin="normal"
            />
          </div>
          <Divider/>
          <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem button key={index}>
                <Avatar>{chat.title && chat.title[0]}</Avatar>
                <ListItemText primary={chat.title} secondary="active X hours"/>
              </ListItem>
            ))}
          </List>
          <Button variant="fab" color="primary" aria-label="add" className={classes.newChatButton}>
            <AddIcon />
          </Button>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="My chats" icon={<PersonIcon/>}/>
            <BottomNavigationAction label="Explore" icon={<HotIcon/>}/>
          </BottomNavigation>
        </Drawer>
        <main className={classes.chatContent}>
          <div className={classes.messagesWrapper}>
            {messages && messages.map((message, index) => {
              const isMessageFromMe = message.sender === 'me';
              const userAvatar = <Avatar>{message.sender[0]}</Avatar>;
              return (
                <div key={index} className={[classes.messageWrapper, isMessageFromMe ? classes.messageWrappperFromMe : ''].join(' ')}>
                  {!isMessageFromMe && userAvatar}
                  <Paper className={[classes.message, isMessageFromMe ? classes.messageFromMe : ''].join(' ')}>
                    <Typography variant="caption">{message.sender}</Typography>
                    <Typography variant="body1">{message.content}</Typography>
                  </Paper>
                  {isMessageFromMe && userAvatar}
                </div>
              );
            })}
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message here…"/>
            </Paper>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
