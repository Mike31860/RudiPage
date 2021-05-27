import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tableinfo from '../components/Tableinfo';
import RecipeReviewCard from '../components/RecipeReviewCard';
import ImgAkshay from '../static/images/Askhay.png';
import ImgRudi from '../static/images/Rudi.jpg';
import '../resources/KoHo.css';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    display: "flex",
    alignItems: "auto",
    flexDirection: "column",
 
    [theme.breakpoints.down('xl')]: {
      paddingLeft: theme.spacing(35),     
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(25),     
    },
    
  },
  contentBody: {
    flexGrow: 2,
    display: "flex",

    /* width:"70%", */
    flexDirection: "column",
   /*  alignItems: "flex-start", */
  },
  title: {
    marginTop: theme.spacing(2),
    fontFamily: 'KoHo',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      fontSize: 15,
     },
     [theme.breakpoints.down('xl')]: {
      paddingLeft: theme.spacing(2),
      fontSize: 35,
     },

  },
  grid: {
    height: '100%',
    width: '100%'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 

}));
const rows = [
  {
  "Name": "Professor Rudolf Eigenmann",
   "id": 1,
  "image":ImgRudi,
  "Description":"Rudolf Eigenmann is a professor at the University of Delaware, Department of Electrical and Computer Engineering. From 1995 to 2017 he was at Purdue University, where he was a professor in the School of Electrical and Computer Engineering. From 2013-2017, he also served as Program Director in the National Science Foundation's Office of Advanced Cyberinfrastructure. ",
  "Page":"https://www.eecis.udel.edu/~eigenman/index.html"
  },
  {
      "Name": "Akshay Bhosale",
      "id": 2,
      "image":ImgAkshay,
      "Description": "I am currently working towards my PhD at the University of Delaware in Newark,DE . My major is Computer Engineering.My Undergrad major was Electronics Engineering. I have completed coursework in a variety of areas ranging from web application security, computer architecture, secure software design to parallel programming, compilers , ML and cryptography. This page will give you a comprehensive overview of all my work.",
      "Page":"http://akshayud.me/"
  },
  {
      "Name": "Parinaz Barakhshan",
      "id": 3,
      "image":ImgAkshay,
      "Description": "We are creating HPC benchmarks that are representative of real-world applications. This is a collaboration with the Standard Performance Evaluation Corporation, SPEC and Indiana University.",
      "Page":"https://sites.udel.edu/xpert-cdi/contact/"
  },
];
function Contacts() {
  const classes = useStyles();
  return (


    <div className={classes.content}>
      <Grid
         
          alignItems="center"

        >  
              <Typography
                  className={classes.title}
                  variant="h4"
                  color='primary'
              >
                Information of Contact  
              </Typography>
              <br/>


            <Grid container spacing={4}>   

              {rows.map((row) => (
                <Grid
                    className={classes.row}
                    
                    item xs={6} sm={4}                      
                >  
                    <RecipeReviewCard id={row.id} name={row.Name} description={row.Description} image={row.image} page={row.Page}/>
                </Grid> 
                ))}  
              
              </Grid>
        </Grid>      
    </div>








  
  );
}
export default Contacts;