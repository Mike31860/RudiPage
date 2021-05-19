import React from 'react';
import Tableinfo from '../components/Tableinfo'
import { makeStyles } from '@material-ui/core/styles';
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
    paddingLeft:theme.spacing(5),
    flexDirection: "column",
  },
  contentBody: {
    flexGrow: 2,
    display: "flex",

    width:"70%",
    flexDirection: "column",
   /*  alignItems: "flex-start", */
  },
  title: {
    marginTop: theme.spacing(2),
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

function Home() {

  const classes = useStyles();

  return (

    <div >
       <Grid
          className={classes.content}
          xs={12}
          alignItems="center"

        >          
        
            <div className={classes.contentBody}>        
                  <Typography
                    className={classes.title}
                    variant="h4"
                    color="primary"
                  >
                    Softwareeeee Techniques, Tools, and Infrastructure for Computational and Data-intensive Applications
                  </Typography> 
               
               <br/>
               <div className={classes.root2}>       

                    <br/>
                    <Grid 
                    className={classes.grid}
                    container
                    spacing={1}

                    >
                    <Grid
                        className={classes.content}
                        item
                        xs
                        alignItems="center"    
                       
                    >  

                        <Tableinfo />
                     

                    </Grid>
              
                    </Grid>
                    </div>           
            </div>
      </Grid>   
  </div>
   
  );
}
export default Home;