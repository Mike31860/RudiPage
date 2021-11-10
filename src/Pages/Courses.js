import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Course from '../components/Course';
import ImgAkshay from '../static/images/parallel.jpg';
import ImgRudi from '../static/images/computational.jpg';
import Digital from '../static/images/digital.jpg';
import '../resources/KoHo.css';
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
  "Name": "Computational & Data-Intensive Research Platforms & Applications, CPEG 467/667 (Fall 2019, Fall 2020)",
   "id": 1,
  "image":ImgRudi,
  "Description":"An introductory course for students conducting computational and data-intensive research in all disciplines, providing an overview of relevant computer systems hardware, software, and applications",
  "Page":"https://www.eecis.udel.edu/~eigenman/CPEG667-syllabus-F20.pdf"
  },
  {
      "Name": "Principles of Parallel Computer Architectures, CPEG/ELEG 652, (Spring 2018, 2019, 2020, 2021)",
      "id": 2,
      "image":ImgAkshay,
      "Description": "",
      "Page":"http://akshayud.me/"
  },
  {
      "Name": "Digital Systems Seminar, ELEG 662, (Spring 2019)",
      "id": 3,
      "image":Digital,
      "Description": "This	is	a	seminar	class	with	bi-weekly	lectures	and discussions	by	guest	speakers,	faculty	and	 students	on	specialized	topics	in	digital	systems.",
      "Page":"https://www.eecis.udel.edu/~eigenman/ELEG662-syllabus-S19.pdf"
  },
];
function Courses() {
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
                Courses (Being) Taught 
              </Typography>
              <br/>


            <Grid container spacing={4}>   

              {rows.map((row) => (
                <Grid
                    className={classes.row}
                    
                    item xs={6} sm={4}                      
                >  
                    <Course id={row.id} name={row.Name} description={row.Description} image={row.image} page={row.Page}/>
                </Grid> 
                ))}  
              
              </Grid>
        </Grid>      
    </div>








  
  );
}
export default Courses;