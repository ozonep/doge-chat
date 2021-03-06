import React from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from './Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
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

const Message = ({classes, sender, content}) => {
  const isMessageFromMe = sender === 'me';
  const userAvatar = <Avatar colorId={sender}>{sender}</Avatar>;
  return (
    <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classNames(classes.message, isMessageFromMe && classes.messageFromMe)}>
        <Typography variant="caption">{sender}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(Message);
