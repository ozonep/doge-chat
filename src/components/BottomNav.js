import React from 'react';
import {withStyles} from 'material-ui/styles';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import PersonIcon from 'material-ui-icons/PersonPin';
import HotIcon from 'material-ui-icons/Whatshot';

const styles = {};

const BottomNav = () => (
  <BottomNavigation showLabels>
    <BottomNavigationAction label="My chats" icon={<PersonIcon/>}/>
    <BottomNavigationAction label="Explore" icon={<HotIcon/>}/>
  </BottomNavigation>
);

export default withStyles(styles)(BottomNav);
