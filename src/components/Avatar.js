import React from 'react';
import MUIAvatar from 'material-ui/Avatar';
import colorPicker from '../utils/colorpicker';
import titleInitials from "../utils/titles";


const Avatar = ({colorId, children, ...props}) => (
  <MUIAvatar style={{ backgroundColor: colorPicker(colorId)}} {...props}>
    {titleInitials(children)}
  </MUIAvatar>
);

export default Avatar;
