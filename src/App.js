import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { makeStyles } from '@material-ui/core/styles';
import Contacts from './Pages/Contacts';

const useStyles = makeStyles((theme) => ({
  Centerbar: {
    paddingLeft:'500'
  },
  content: {
    height: "100%",
    display: "center",
    alignItems: "auto",
    flexDirection: "column",
 
    [theme.breakpoints.down('xl')]: {
      paddingLeft: theme.spacing(50),     
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(25),     
    },
    
  },
 
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router >
        <Navbar className={classes.Centerbar} />
        <Switch>
          <Route  path='/' exact component={Home} />
          <Route path='/contacts'  exact component={Contacts}/>
          <Route render={() => 
                <div className={classes.content}>
                   <h1 >404: page not found</h1>
                </div>
          }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;