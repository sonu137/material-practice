import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const styles = themes => ({
    
    generalMenu: {
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
    footerGeneralMenu: {
        marginLeft: '8rem',
        marginTop: '10px',
        // '&:hover': {
        //     fontWeight: 'bolder',
        // },
    },
    divider: {
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
        <Grid item xs={6} className={classes.footerGeneralMenu}>
            <Typography className={classes.title} variant="title">General</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.generalMenu} >Sign Up <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Help Center <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >About <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Press <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Blog <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Careers <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Developers </a></li>
            </ul>
        </Grid>
        <Grid item xs={6} className={classes.footerGeneralMenu}>
            <Typography className={classes.title}>Bussiness Solution</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.generalMenu} >Talent <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Marketing <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Sales <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Learning <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Company Pages </a></li>
                
            </ul>
        </Grid>
        </div>
        <div className={classes.footermenu}>
        <Grid item xs={6} className={classes.footerGeneralMenu}>
            <Typography className={classes.title} variant="title">General</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.generalMenu} >Learning <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Jobs <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Mobile <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Pro Finder <span style={{margin: '0 5px'}}>&#124;</span></a></li>
            </ul>
        </Grid>
        <Grid item xs={6} className={classes.footerGeneralMenu}>
            <Typography className={classes.title}>Bussiness Solution</Typography>
            <ul style={{listStyleType: 'none',display: 'flex', padding: '0'}}>
                <li><a href="#" className={classes.generalMenu} >Members <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Jobs <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Companies <span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Salaries<span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Universities<span style={{margin: '0 5px'}}>&#124;</span></a></li>
                <li><a href="#" className={classes.generalMenu} >Top Jobs</a></li>
            </ul>   
        </Grid>
        </div>
        <Divider variant="middle" color="primary" className={classes.divider}/>
        </Fragment>
    );
  }
  
  Browse.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Browse);