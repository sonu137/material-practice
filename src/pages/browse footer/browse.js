import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = themes => ({
    
    GeneralMenu: {
      display: 'inline-block',
      margin: '0 2px',
      textDecoration: 'none',
      color: '#fff',
    },
    title: {
      fontSize: 14,
      color: '#fff',
    },
    
    footermenu:{
        display: 'flex',
        margin: '0',
    },
    footer_menu_general: {
        marginLeft: '8rem',
        marginTop: '10px',
        // '&:hover': {
        //     fontWeight: 'bolder',
        // },
    },
    Divider: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#797c7f',
        marginTop: '20px',
    },
    
  });
  
  function Browse(props) {
    const { classes } = props;
  
    return (
        <Fragment>
        <div className={classes.footermenu}>
        <Grid item xs={6} className={classes.footer_menu_general}>
            <Typography className={classes.title} variant="title">General</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.GeneralMenu} >Sign Up <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Help Center <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >About <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Press <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Blog <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Careers <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Developers </a></li>
            </ul>
        </Grid>
        <Grid item xs={6} className={classes.footer_menu_general}>
            <Typography className={classes.title}>Bussiness Solution</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.GeneralMenu} >Talent <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Marketing <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Sales <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Learning <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Company Pages </a></li>
                
            </ul>
        </Grid>
        </div>
        <div className={classes.footermenu}>
        <Grid item xs={6} className={classes.footer_menu_general}>
            <Typography className={classes.title} variant="title">General</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.GeneralMenu} >Learning <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Jobs <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Mobile <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Pro Finder <span style={{margin: '0 5px'}}>&#124;</span></a></li>
            </ul>
        </Grid>
        <Grid item xs={6} className={classes.footer_menu_general}>
            <Typography className={classes.title}>Bussiness Solution</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.GeneralMenu} >Members <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Jobs <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Companies <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Salaries<span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Universities<span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.GeneralMenu} >Top Jobs</a></li>
            </ul>   
        </Grid>
        </div>
        <Divider variant="middle" color="primary" className={classes.Divider}/>
        </Fragment>
    );
  }
  
  Browse.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Browse);