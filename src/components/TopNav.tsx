import {
  AppBar, Hidden, Tabs, Tab, Toolbar, Box,
} from '@material-ui/core';
import {
  makeStyles, createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import { Link, useLocation } from "react-router-dom";

import React from 'react';

import TopDrawer from './TopDrawer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  nav: {
    backgroundColor: 'rgba(255, 255, 255, 255)',
    color: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    boxShadow: "none",
  },
  logo: {
    padding: "3vh 5vh",
    [theme.breakpoints.down("md")]: {
      padding: "3vh 1vh",
    }
  }
}));
interface StyledTabsProps {
  value: number;
}
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1, 
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#F1C833',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
const routes: any[] = [{name: "Home", to: "/"}, {name: "Our Product", to: "/product"}, {name: "About us", to: "/about"}]

const TopNav: React.FC = () => {
  const classes = useStyles(undefined);
  const location = useLocation();
  const idx = routes.findIndex(route => route.to === location.pathname);
  return (
    <AppBar position="sticky" className={classes.nav}>
      <Toolbar style={{ width: "100%" }}>
        <Link to="/" className={classes.logo}>
          <img width="100" src="logo.png" alt="logo" />
        </Link>
        <Hidden smDown>
          <StyledTabs value={idx}>
            {routes.map(route => (
              <Link to={route.to} style={{color: "inherit", textDecoration: "none" }} key={route.to}>
                <Tab style={{ fontSize: "1.2rem", textTransform: "capitalize" }} label={route.name}/>
              </Link>
            ))}
          </StyledTabs>
        </Hidden>
        <Box flexGrow={1} />
        <Hidden mdUp>
          <TopDrawer />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
