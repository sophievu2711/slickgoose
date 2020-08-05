import React from 'react';
import { Heading, Flex, Text, Image } from "rebass";
import { Hero, Feature } from "react-landing-page";
import { Box, Typography, Grid, IconButton, Button } from '@material-ui/core';
import Sunflower from './Sunflower';
import {
    makeStyles, createStyles, Theme,
  } from '@material-ui/core/styles';
import './textStyle.css';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
const useStyles = makeStyles((theme: Theme) => createStyles({
fullBannerBox: {
    background: 'linear-gradient(to bottom, #F4F4F9 20%, #fff 80%)',
},
bannerBox: {
    height: '60vh',
    padding: '5vh',
    textAlign: 'center',
    marginLeft: '9vh',
    [theme.breakpoints.down('md')]: {
        marginLeft: '8vh',
        height: '60vh',
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: '5vh',
        height: '40vh',
    },
    [theme.breakpoints.down('xs')]: {
        marginLeft: '2vh',
        height: '30vh',
    },
},
banner: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },
},
subtitle: {
    fontSize: '3vh',
    color: 'rgb(0,0,0,0.8)',
    marginBottom: '3vh',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2vh',
    },
},
logoBox: {
    paddingTop: '3vw',
    [theme.breakpoints.down('md')]: {
        paddingTop: '5vw',
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: '10vw',
    },
},
goalsBox: {
    // background: 'linear-gradient(to right, #FDFDFF 20%, #fff 80%)',
    padding: '8vh',
},
projectTeamBox: {
    background: 'linear-gradient(to right, #F4F4F9 20%, #fff 80%)',
},
}));  
export default function Home(props: any) {
    const classes = useStyles(undefined);
    return (
        <Box>
            <Box className={classes.fullBannerBox}>
                <Box className={classes.logoBox}>
                    <Heading textAlign="center" fontFamily={"inherit"} fontWeight={100}>
                        <Sunflower/>
                    </Heading>
                </Box>
                <Box>
                    <Typography className={classes.subtitle} style={{ textAlign: 'center' }}>
                        A cross-platform web app for digital learning
                    </Typography>
                </Box>
                <Box className={classes.bannerBox}>
                    <img className={classes.banner} src="mockup.png" alt="mockup" />
                </Box>
            </Box>
            <Hero>
                <Flex width={[1, 2/3]} alignItems="center" flexDirection="column">
                    <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <Feature icon="💡" description="Designed to improve teaching and learning efficiency.">
                            Performance
                        </Feature>
                        <Feature icon="💬" description="Enhance communication through group discussion and personalised interaction.">
                            Build relationships 
                        </Feature>
                        <Feature icon="🎯" description="Minimalist interface design with simple English.">
                            Easy to use
                        </Feature>
                        <Feature icon="📱" description="Use anytime, anywhere, on any device.">
                            Responsive
                        </Feature>
                    </Flex>
                </Flex>
                <Grid container style={{ padding: '10vw'}}>
                    <Grid item xs={12} md={7}>
                        <Heading fontFamily={"inherit"} fontSize='8vh' fontWeight={500} paddingBottom="5vh" className="ourClient">Our Client</Heading>
                        <Heading fontFamily={"inherit"} fontSize='3vh' fontWeight={500} paddingBottom="3vh" >EO1 Ltd Pty - Engage Online <IconButton href="https://engageonline.com.au/"><OpenInNewIcon/></IconButton></Heading>
                        <Text fontFamily={"inherit"} fontSize='2.5vh' paddingBottom="1.5vh">Engage Online is a fully-loaded digital agency with the head office located in the beautiful city of Wollongong, Australia.</Text>
                        <Text fontFamily={"inherit"} fontSize='2.5vh' >Engage Online works with a wide range of businesses, bringing diverse challenges and solutions. </Text>
                    </Grid>
                    <Grid item xs={12} md={5} style={{ textAlign: 'right', padding: '6vh' }}>
                        <img src="eo1.png" alt="eo1" width="80%" />
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '10vw', textAlign: 'center'}} className={classes.projectTeamBox}>
                    <Grid item xs={12}>
                        <Heading fontFamily={"inherit"} fontSize='3vh' fontWeight={500} paddingBottom="8vh" >
                            <img src="logo.png" alt="slickgoose" width="20%" />
                        </Heading>
                        <Text fontFamily={"inherit"} fontSize='2.5vh' paddingBottom="1.5vh">We’re an agile team run by students from Faculty of Engineering and Information Sciences at University of Wollongong.</Text>
                        <Text fontFamily={"inherit"} fontSize='2.5vh' >The team was founded for our degree final project that run between August 2019 - June 2020. </Text>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '5vw' }}>
                        <Button href="/about" style={{ fontSize: '2vh', fontWeight: 600, borderBottom: '2px dotted black', borderRadius: 0 }}>View more</Button>
                    </Grid>
                </Grid>
            </Hero>
        </Box>
    )
}