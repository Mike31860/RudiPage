import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    const onclick = () => {
    
          window.location.replace(`${props.page}`);
        
      };
      console.log(props.page)

    return (
      
      <div>
        {props.page!==undefined && props.page==="No" || props.name==="No yet" ?(
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