import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red , blue} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import ImgAkshay from '../static/images/Askhay.png';
import ImgMigue from '../static/images/Migue.jpeg';
/* import ImgParinaz from '../static/images/parinaz.jpg'; */
import ImgParinaz from '../static/images/parina.png';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
  root: {
    /* maxWidth: 400, */
    width: 300
  },
  ima:{
    display: 'flex',
    height: '200px',
    width:'200px',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft:"15%",
    [theme.breakpoints.down("sm")]: {
      height: '100px',
      width:'200px',
      justifyContent: 'center'
    },
 
  }
  ,
  media: {
    height: 0,
   /*  paddingTop: '56.25%',  */// 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));
const RecipeReviewCard = props =>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [imagen, setImage]=props.image;


  const handleExpandClick = () => {
    setExpanded(!expanded);
    window.location.replace(`${props.page}`);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {props.name.charAt(0)}
          </Avatar>
        
        }       
        title={props.name}
        subheader="University of Delaware"
      />

      <img  className={classes.ima} src={props.id==1?ImgAkshay:(props.id==2?ImgParinaz:ImgMigue
        )}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ContactMailIcon fontSize="large"  style={{ color: blue[500] }}  />
        </IconButton>
      </CardActions>
    
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  page: PropTypes.string,
};

export default RecipeReviewCard;