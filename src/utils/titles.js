const titleInitials = (title) => {
  try {
    return title.split(' ').map(word => word[0].toUpperCase()).slice(0, 2).join('')
  } catch(e) {
    console.error(e);
    return 'we are doomed'
  }
};

export default titleInitials;
