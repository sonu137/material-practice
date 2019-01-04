import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { InputBase } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Navbar from '../../styles/navbar.scss';
import Themes from '../../theme.js';

const styles =theme =>({
  card: {
    width: '400px',
    // minWidth: '1128px',
    margin: '0 auto',
    borderRadius: '2px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'left',
    resize: 'both',
    overflow: 'auto',
    position: 'absolute',
    zIndex: '1',
    justifyContent: 'center',
    top: '5%',
    left: '25%',
    transform: 'translateX(50%)',
    

    [theme.breakpoints.up('xs')]: {
      width:'300px',
      marginTop: '5rem',
    },
    [theme.breakpoints.up('sm')]: {
      width:'300px',
      marginTop: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      width:'400px',
      marginTop: '5rem',
    },
  },
  Content: {
    margin: '0',
    padding: '0',
    marginTop: '1rem',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '5px',
  },
  subtitle: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center',
    margin: '10px 0 12px',
  },
  pos: {
    marginBottom: 12,
  },
  header: {
      backgroundColor: 'none',
      marginBottom: '1rem',
      textAlign: 'center',
  },
  bootstrapFormLabel: {
    color: 'black',
    margin: '8px 0 4px',
  },
  formsdata: {
    backgroundColor: '#EDF0F3',
    display: 'flex',
    flexFlow: 'row wrap',
    padding: '0 25px',
    flex: '1',
    minWidth: '0',
    // justifyContent: 'center',
  },
  forms: {
    border: '1px solid grey',
    marginBottom: '10px',
    backgroundColor: 'white',
  },
  policy:{
    fontSize: '11.5px',
    color: 'black',
    marginBottom: '1rem',
  },
  divider: {
    backgroundColor: '#7d7878',
  },
  button: {
    backgroundColor: '#0073b1',
    textTransform: 'initial',
    fontSize: '16px',
    fontWeight: '500',
  },
  Input: {
    marginLeft: '10px',
  },
});


function SimpleCard(props) {
  const { classes } = props;


  return (
    <Card className={classes.card}>
            <CardContent className={classes.Content}>
                {/* <div className={classes.header}> */}
                    <Typography className={classes.title} color="textSecondary" variant="title" gutterBottom>
                    Be great at what you do
                    </Typography>
                    <Typography variant="subheading" component="h2" className={classes.subtitle} >
                    Get started - it's free.
                    </Typography>
                    <Divider  fullWidth className={classes.divider}/>
                {/* </div> */}
                <div className={classes.formsdata}>
                    <InputLabel className={classes.bootstrapFormLabel}>
                        First name
                    </InputLabel>
                    <InputBase
                      id="bootstrap-input"
                      type= "text"
                      fullWidth= 'true'
                      className={classes.forms}
                      >
                    </InputBase>

                    <InputLabel className={classes.bootstrapFormLabel}>
                      Last name
                    </InputLabel>
                    <InputBase
                      id="bootstrap-input"
                      type= "text"
                      fullWidth= 'true'
                      className={classes.forms}
                      >
                    </InputBase>

                    <InputLabel className={classes.bootstrapFormLabel}>
                        Email
                    </InputLabel>
                    <InputBase
                      id="bootstrap-input"
                      type= "text"
                      fullWidth= 'true'
                      className={classes.forms}
                      >
                    </InputBase>

                    <InputLabel className={classes.bootstrapFormLabel}>
                        Password (6 or more characters)
                    </InputLabel>
                    <InputBase
                      id="bootstrap-input"
                      type= "password"
                      fullWidth= 'true'
                      className={classes.forms}
                      >
                    </InputBase>
                    <Typography gutterBottom align="center" className={classes.policy}>
                      By clicking Join now, you agree to the LinkedIn User Agreement,<br/> 
                      Privacy Policy, and Cookie Policy.
                    </Typography>

                    <Button variant="contained" color="primary" fullWidth color="secondary" className={classes.button}>
                      Join now
                    </Button>
                </div>
      </CardContent>
      
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);