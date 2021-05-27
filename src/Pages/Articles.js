import React, { useEffect, useState } from "react";
import Tableinfo from '../components/Tableinfo'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
/* import HtmlPage from '../hpclab.html'; */
import axios from 'axios';
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

function Articles() {

  const classes = useStyles();
  const [myHtml, setMyHtml] = useState("");
  
  function getHtml() {
        /* axios.get('https://engineering.purdue.edu/paramnt/hpclab.html').then(response => {
          const extractScriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gmi;
          let scriptsExtracted;
          let innerHtml = response.data;
          while(scriptsExtracted = extractScriptRegex.exec(response.data)) {
            innerHtml = innerHtml.replace(scriptsExtracted[0], '');
            window.eval(scriptsExtracted[1]);
          }
          setMyHtml({ myHtml: innerHtml });
        }).catch(error => {
          setMyHtml({ myHtml: '<h1>Error</h1>' });
        }); */

        console.log(myHtml)
      }

  return (

    <div >
       <Grid
          className={classes.content}
          alignItems="center"

        >          
        
            <div className={classes.contentBody}>        
                  <Typography
                    className={classes.title}
                    variant="h4"
                    color="primary"
                  >
                    Still working on this, It will be ready soon!
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
                      
                        item
                        xs
                        alignItems="center"    
                       
                    >  
                   
                        <div>
                           <div>
                           
                           
                           </div>
                  </div>
                     

                    </Grid>
              
                    </Grid>
                    </div>           
            </div>
      </Grid>   
  </div>
   
  );
}
export default Articles;