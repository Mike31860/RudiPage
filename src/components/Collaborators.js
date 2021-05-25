import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {
    Button,
    Link,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({

    button:{
      position: 'relative',
      alignItems: 'center',
      alignText: 'center',
      justifyContent: 'center',
    },
    title:{
      fontFamily: 'KoHo',
    },
    ima:{
      display: 'flex',
      height: '250px',
      width:'250px',
      justifyContent: 'center',
      alignItems: "center",
      
      [theme.breakpoints.down("sm")]: {
        height: '100px',
        width:'200px',
        justifyContent: 'center'
      },
    
    }
  
  }));
const Collaborators = props =>{
  const classes = useStyles();
  let history = useHistory();
    const onclick = () => {
    
          window.location.assign(`${props.page}`);
  
      };
     

    return (
      
      <div>
        {(props.page!==undefined && props.page==="No") || props.name==="No yet" 
        || props.name==="Parinaz Barakhshan" || props.name==="as well as a group of 50+ researchers."
        || props.name==="Jan Sher Khan" || props.name==="Hao Wang" 
        || props.name==="Bill Totten"?(
            props.name
        ):(
          <Link variant="contained"  color="primary"
          onClick={onclick}
          className={classes.title}
          name='Page'>{props.name}</Link>

        )}
     </div>
    )
}
Collaborators.propTypes = {
  page: PropTypes.string,
  name: PropTypes.string,
};

export default Collaborators;