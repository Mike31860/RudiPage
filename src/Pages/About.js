import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,  Typography,} from '@material-ui/core';
import Course from '../components/Course';
import ImgRudi from '../static/images/Rudi.jpg';
import About from '../components/About';


const useStyles = makeStyles((theme) => ({
    content: {
      height: "100%",
      display: "flex",
      alignItems: "auto",
      flexDirection: "column",
   
      [theme.breakpoints.down('xl')]: {
        paddingLeft: theme.spacing(15),     
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(20),     
      },
      
    },
    contentBody: {
      width:"80%",
      flexDirection: "column",
     
    },
    title: {
      marginTop: theme.spacing(2),
      fontFamily: 'KoHo',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        fontSize: 15,
       },
       [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        fontSize: 15,
       },
       [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        fontSize: 20,
       }
    },
    grid: {
      height: '100%',
      width: '100%'
    },
    root2: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
          color: theme.palette.text.secondary,
    },
  
  }));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div >
        <br/>
        <Grid
        className={classes.content}
        alignItems="center"

        > 
    <div className={classes.contentBody}>
      <Grid container spacing={3}>
       
        <Grid item xs={12} sm={6}>
          
        <div className={classes.root}>
           <Grid container spacing={3}>
           <Typography
                  className={classes.title}
                  variant="h4"
                  color='primary'
              >
                Rudolf Eigenmann
              </Typography>
           </Grid>
           <Grid container spacing={3}>
           <Typography
                  className={classes.title}
                  variant="h5"
                  color='primary'
              >
                Professor
              </Typography>
              <br/>
              <br/>
              <br/>
              <br/>
           </Grid>
           <Grid container spacing={3}>
           <Typography
                  className={classes.title}
                  variant="h5"
                  color='primary'
              >
                Education
              </Typography>
              <br/>
           </Grid>
           <Grid container spacing={3}>
           <Typography
                  className={classes.title}
                  variant="h5"
                  fontFamily= 'KoHo'
              >
                PhD |ETH Zürich, Switzerland
              </Typography>
              <br/>
              <br/>
              <br/>
              <br/>
           </Grid>
           <Grid container spacing={3}>
           <Typography
                  className={classes.title}
                  variant="h5"
                  color='primary'
              >
                ABOUT RUDOLF EIGENMANN
              </Typography>
              <br/>
              <br/>
           </Grid>
           <Grid container spacing={3}>
           <br/>
           <Typography
                  className={classes.title}
                  variant="7"
                  fontFamily= 'KoHo'
              >
               Rudolf (Rudi) Eigenmann came to the University of Delaware in2017 from Purdue University, where he was a Professor in the School of Electrical and Computer Engineering. From 2013-2017, he has also served as Program Director in the National Science Foundation’s Office of Advanced Cyberinfrastructure. His core research interests include optimizing compilers, programming methodologies, tools, and performance evaluation for high-performance computing, as well as the design of cyberinfrastructure. Dr. Eigenmann received his Ph.D. in Electrical Engineering/Computer Science from ETH Zurich, Switzerland.
              </Typography>
              <br/>
              <br/>
           </Grid>
        </div>

        </Grid>
        
        <Grid item xs={12} sm={6}>
        <br/>
        <About id="1" name="Rudolf (Rudi) Eigenmann" image={ImgRudi} description={"Phone: 302-831-0678"} email="eigenman@udel.edu"/>
        </Grid>
       
      </Grid>
    </div>
    </Grid>   
  </div>
  );
}