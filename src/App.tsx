import React, { useEffect } from 'react';
import './App.css';
import { makeStyles, createMuiTheme, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import { Flex, Text } from 'rebass';
import Contact from './components/Contact';

import TopNav from './components/TopNav';

const useStyles = makeStyles(() => ({
  root: {
    // backgroundImage: 'url("./image3.png")',
    // height: "100vh",
    background: "#FFFFFF"
    // backgroundSize: "cover"
  }
}))
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#F1C833"
    }
  },
});
  
function App() {
  const classes = useStyles(undefined);
  return (
    <Box>
    <ThemeProvider theme={theme}>
        <TopNav />
        <Box className={classes.root}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
        </Switch>
        </Box>
      </ThemeProvider>
      <Contact />
      <Flex style={{background: "#212020"}} height="80px" alignItems="center" justifyContent="center"> 
        <Text style={{color: "white"}}>Copyright © slickGoose | University of Wollongong</Text>
      </Flex>
      </Box>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default () => (<Router><ScrollToTop/><App/></Router>);
