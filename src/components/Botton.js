import React from 'react'
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import {
    Button,
  } from "@material-ui/core";

const Botton = props =>{

    const onclick = () => {
        window.location.replace(`${props.page}`);
      };


    return (
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={onclick}>
          <SearchIcon />
        </IconButton>     
    )
}
Botton.propTypes = {
  page: PropTypes.string,
};

export default Botton;