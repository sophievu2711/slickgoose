import {
    makeStyles, createStyles, Theme,
} from '@material-ui/core/styles';import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
    size: {
        fontSize: '5rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        }
    }
})); 
export default function Sunflower(props: any) {
    // const size = props.size || 50
    const classes = useStyles(undefined);
    return (
       <span style={{fontFamily: "Pacifico", color: `${props.color || "#F1C833"}`}} className={classes.size}>sunflower</span>
    );
}