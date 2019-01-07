import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


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
  });
  
  function CompanyFooter(props) {
    const { classes } = props;
  
    return (
        <div></div>
    );
  }
  
  CompanyFooter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CompanyFooter);