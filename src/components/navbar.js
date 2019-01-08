import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from '../images/svg/linkedin.png';
import Navbar from '../styles/styles.scss';
const styles = theme => ({
  navbar : {
    backgroundColor: '#283e4a',
    position: 'fixed',
    minWidth:'1200px',

    [theme.breakpoints.up('xs')]: {
      width:'100%',
    },
    [theme.breakpoints.up('sm')]: {
      width:'100%',
      minWidth:'1096px',
    },
  },
  button: {
    padding: '6px 15px',
    color: '#fff',
    borderColor: 'white !important',
    fontSize: '12px',
    marginBottom: '13px',
      '&:hover' : {
        backgroundColor: 'white',
        color: 'black',
      },
  },
  subheading:{
    margin: theme.spacing.unit,
    color: '#cdcfd2',
    fontSize: '13.5px',
    cursor: 'pointer',
    display: 'inline-block',  

      '&:hover' : {
      textdecoration: 'underline',
      color: 'white',
    },
  },
  input: {
    display: 'none',
  },
  title: {
    display: 'flex',
    flexDirection:"row",
    marginLeft: "20rem",
    [theme.breakpoints.up('md')]: {
      left: '0',
      right: '0',
    },
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapInput: {
    display:'flex',
    borderRadius: 2,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 12,
    padding: '8px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 15,
  },
});

class Linkedin extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
          <AppBar position="static" color="primary" className={classes.navbar + ' test'}>
            <Toolbar>
              <Grid item xs={6}>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                  <img src={Logo} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.margin}>
                  <InputBase
                    id="bootstrap-input"
                    type="Email"
                    placeholder="Email"
                    classes={{
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputBase
                      id="bootstrap-input"
                      type="password"
                      placeholder="Password"
                      classes={{
                      root: classes.bootstrapRoot,
                      input: classes.bootstrapInput,
                      }}
                    />
                </FormControl>
                <Button variant="outlined" className={classes.button}>
                  Sign in
                </Button>
                <Typography className={classes.subheading} variant="subheading" noWrap>
                    Forgot Password?
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}

Linkedin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Linkedin);