import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const styles = themes => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    margin: '15px 0',

  },

  link: {
      color: 'white',
      display: 'flex',
      listStyle: 'none',
      margin: '0',
  }, 
  directories: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '14px',
    '&:hover': {
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
  },
});
  
  function CompanyFooter(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
          <ol className={classes.link}>
            <li><a href="#" className={classes.directories}>LinkedIn © 2019</a></li>
            <li><a href="#" className={classes.directories}>User Agreement</a></li>
            <li><a href="#" className={classes.directories}>Privacy Policy</a></li>
            <li><a href="#" className={classes.directories}>Community Guidelines</a></li>   
            <li><a href="#" className={classes.directories}>Cookie Policy</a></li>
            <li><a href="#" className={classes.directories}>Copyright Policy</a></li>
            <li><a href="#" className={classes.directories}>Guest Controls</a></li>
            <li><a href="#" className={classes.directories}>Language</a></li>
          </ol>
      </div>
    );
  }
  
  CompanyFooter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CompanyFooter);