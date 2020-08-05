import { Drawer, List, ListItem, Button, IconButton, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles({
  drawerItem: {
    width: '100%',
  },
  section: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '2vh',
    color: 'rgb(0,0,0, 0.8)',
    '&:hover': {
      backgroundColor: 'rgb(0,0,0, 0.1)',
      textDecoration: 'none',
    }
  }
});
const TopDrawer: React.FC = () => {
  const [opening, setOpenDrawer] = React.useState(false);
  const classes = useStyles(undefined);
  const toggleDrawer = () => {
  setOpenDrawer(!opening);
}
  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon style={{ width: '30px', height: '30px' }} />
      </IconButton>
      <Drawer anchor="top" open={opening} onClose={toggleDrawer}>
        <List className={classes.drawerItem}>
          <ListItem style={{ marginBottom: '2vh' }}>
            <Button onClick={toggleDrawer} startIcon={<CloseIcon />}>Close</Button>
          </ListItem>
          <ListItem component={Link} href="/" className={classes.section} divider>
            Home
          </ListItem >
          <ListItem component={Link} href="/product" className={classes.section} divider>
            Our Product
          </ListItem>
          <ListItem component={Link} href="/about" className={classes.section}>
            About Us
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default TopDrawer;