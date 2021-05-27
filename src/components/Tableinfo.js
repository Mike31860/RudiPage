import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ImgOne from '../static/images/dataScience.jpg';
import ImgTwo from '../static/images/image2.jpg';
import ImgThree from '../static/images/imageThree.jpg';
import ImgFour from '../static/images/imageFour.jpg';
import ImgFive from '../static/images/imageFive.jpg';
import { Redirect } from "react-router";
import Botton from './Botton';
import Collaborators from "./Collaborators";
import '../resources/KoHo.css';
import {
  Grid,
  Typography,
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
  title2:{
    fontFamily: 'KoHo',
    color: "#000000"
  },
  ima:{
    display: 'flex',
    height: '200px',
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

const StyledTableCell = withStyles((theme) => ({
head: {
  backgroundColor:  "#060b26" ,
  color: theme.palette.common.white,
},
body: {
  fontSize: 14,
},
button:{
  justifyContent: 'center',
    alignItems: 'center'
},


  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
},
}))(TableRow);
const rows = [
    {
    "Name": "DARWIN -- Delaware Advanced Research Workforce and Innovation Network",
     "id": 1,
    "image":ImgOne,
    "page":"https://dsi.udel.edu/core/computational-resources/darwin/",
    "Description": "DARWIN is a compute and storage resource supporting computational and data-intensive research at the University of Delaware and in the Delaware Region. DARWIN is funded by an NSF MRI (Major Research Instrumentation) grant.",
    "collaborators": 
      [{"name": "Cathy Wu", "page":"https://bioinformatics.udel.edu/people/personnel/cathy_wu/" }, 
      {"name": "Ben Bagozzi", "page":"https://www.poscir.udel.edu/people/faculty/Bagozzib"},
      { "name": "Arthi Jayaraman", "page":"https://cbe.udel.edu/people/faculty/arthij/"},
      { "name": "Bill Totten", "Page":"https://sites.udel.edu/it-rci/about/" },
      {"name": "as well as a group of 50+ researchers.", "Page":"No"}
      ],  "ResearchStaff": [{"name":"No yet","Page":"No"}]},
   
    {
        "Name": "The Xpert Network --A Peer Network for the exchange of computational best practices and support environments",
        "id": 2,
        "image":ImgTwo,
        "page":"https://sites.udel.edu/xpert-cdi/",
        "Description": "Through a series of online and face-to-face meetings we are aiming to create synergy among teams that assist researchers in developing, optimizing, and running computational and data-intensive applications. We also connect developers of tools that help accomplish these tasks.",
        "collaborators": [{"name":"No yet", "Page":"No"}],
        "ResearchStaff": [{"name": "Parinaz Barakhshan", "Page":"No"}
        ]
    },
    {
        "Name": "Real-Application Benchmarks for High-Performance Computing",
        "id": 3,
        "image":ImgThree,
        "page":"https://www.nsf.gov/awardsearch/showAward?AWD_ID=1842623",
        "Description": "We are creating HPC benchmarks that are representative of real-world applications. This is a collaboration with the Standard Performance Evaluation Corporation, SPEC and Indiana University.",
        "collaborators": [{"name":"No yet", "Page":"No"}],
        "ResearchStaff": [{"name": "Sunita Chandrasekaran" ,"page":"https://www.eecis.udel.edu/~schandra/" },
        {"name": "Robert Henschel", "page":"https://itnews.iu.edu/people/henschel.php" } ]
    },
    {
        "Name": "Cetus Source-to-Source Compiler Infrastructure",
        "id": 4,
        "image":ImgFour,
        "page":"https://engineering.purdue.edu/Cetus/",
        "Description": "Cetus is a compiler and transformation infrastructure for transforming C source code. The original purpose of Cetus was for automatic parallelization - translation of C code into C code annotated with OpenMP directives. Many other uses of the translator have emerged, such as the translation of OpenMP programs into CUDA and MPI.",
        "collaborators": [{"name":"Samuel Midkiff", "page":"https://engineering.purdue.edu/~smidkiff/"}, 
        {"name":"Milind Kulkarni", "page":"No"}],
        "ResearchStaff": [{"name": "Akshay Bhosale", "Page":"http://akshayud.me/"},
        {"name": "Parinaz Barakhshan", "Page":"No" }, 
        {"name": "Jan Sher Khan","Page":"No" }, 
        {"name": "Hao Wang","Page":"No" }  ]
    },
    {
        "Name": "Advanced Program Analysis for Parallelization",
        "id": 5,
        "image":ImgFive,
        "page":"http://subscripted-subscript.akshayud.me/",
        "Description": "In this project we develop novel compiler analysis techniques that gather information from the program that enables parallelization of code that could not be parallelized in the past. Our current focus in on analyzing properties of the content of subscript arrays.",
        "collaborators": [{"name":"No yet","Page":"No"}],
        "ResearchStaff": [{"name": "Akshay Bhosale", "Page":"http://akshayud.me/" }]
    }
 
];

export default function Tableinfo() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.title}>Name</StyledTableCell>
            <StyledTableCell align="left" className={classes.title}>Description</StyledTableCell>
            <StyledTableCell align="left" className={classes.title}>Collaborators</StyledTableCell>
            <StyledTableCell align="left" className={classes.title}>Research Staff</StyledTableCell>
            <StyledTableCell align="left" className={classes.title}>More info</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
         
              <StyledTableCell component="th" scope="row">
                <Grid
                  direction="row"
                  >
                    <Grid >
                        <Typography
                          className={classes.title2}
                        
                        >
                         {row.Name}  
                      </Typography>
                    </Grid >

                    <Grid align="center" >
                    <img className={classes.ima} alt="ImgPerson" src={row.image} 
                  
                      
                    />
                    </Grid>
                </Grid>
                  
              </StyledTableCell>
              <StyledTableCell   className={classes.title2} align="left">{row.Description}</StyledTableCell>
              <StyledTableCell align="left">
              <Grid
                direction="row"
                >
                    {row.collaborators.map((row2) => (
                     <div> 
                    <Collaborators 
                       name={row2.name} page={row2.page}
                    />
                     <br />
                    </div>
                   
                 ))}
                </Grid> 
              
            
              </StyledTableCell>
              <StyledTableCell align="left">
              <Grid
                direction="row"
                >
                    {row.ResearchStaff.map((row2) => (
                    <div> 
                    <Collaborators 
                       name={row2.name} page={row2.page}
                    />
                     <br />
                    </div>

                 ))}
                </Grid> 
              
              </StyledTableCell>
              <StyledTableCell align="left">
          
            <Botton page={row.page}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
