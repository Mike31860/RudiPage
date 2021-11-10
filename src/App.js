import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import { makeStyles } from '@material-ui/core/styles';
import Contacts from './Pages/Contacts';
import Articles from './Pages/Articles';
import Courses from './Pages/Courses';
import Research from './Pages/Research';


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
          <Route  path='/' exact component={About} />
          <Route  path='/research' exact component={Research} />
          <Route path='/students'  exact component={Contacts}/>
          <Route path='/publications'  exact component={Articles}/>
          <Route path='/teaching'  exact component={Courses}/>
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