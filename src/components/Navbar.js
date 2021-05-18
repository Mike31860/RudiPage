import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import ImgOne from '../static/images/logo.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const classes = useStyles();
  const showSidebar = () => setSidebar(!sidebar);
  const element = <p style={{ color: 'white' }}>University of Delaware Lab</p>

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div className={classes.root}>
     
     
      
    </div>
               </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' /* onClick={showSidebar} */>
            <li className='navbar-toggle'>
              {/* <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link> */}
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={3}>
                  <Avatar alt="Remy Sharp" src={ImgOne}/>
                  </Grid>
                  <Grid item xs={6}>
                    <p>{element}</p>
                  </Grid>
        
              </Grid>
               
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;