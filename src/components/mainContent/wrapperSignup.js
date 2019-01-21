import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { InputBase } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';
// Styling and file transfers
import Navbar from '../../styles/styles.scss';
import Themes from '../../theme.js';
import WrapperSignup from '../../styles/WrapperSignup.styles'

function SimpleCard(props) {
  const {classes} = props;
  return (

    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color='textSecondary' variant='title' gutterBottom>
        Be great at what you do
        </Typography>
        <Typography variant='subheading' component="h2" className={classes.subtitle} >
        Get started - it's free.
        </Typography>
        <Divider  fullWidth className={classes.divider}/>

      <div className={classes.formsdata}>
          <InputLabel className={classes.bootstrapFormLabel}>
              First name
          </InputLabel>
          <InputBase
            id='bootstrap-input'
            type= 'text'
            fullWidth= 'true'
            className={classes.forms}
            >
          </InputBase>
          <InputLabel className={classes.bootstrapFormLabel}>
            Last name
          </InputLabel>
          <InputBase
            id='bootstrap-input'
            type= 'text'
            fullWidth= 'true'
            className={classes.forms}
            >
          </InputBase>

          <InputLabel className={classes.bootstrapFormLabel}>
              Email
          </InputLabel>
          <InputBase
            id='bootstrap-input'
            type= 'text'
            fullWidth= 'true'
            className={classes.forms}
            >
          </InputBase>
          <InputLabel className={classes.bootstrapFormLabel}>
              Password (6 or more characters)
          </InputLabel>
          <InputBase
            id='bootstrap-input'
            type= 'password'
            fullWidth= 'true'
            className={classes.forms}
            >
          </InputBase>

          <Typography gutterBottom align='center' className={classes.policy}>
            By clicking Join now, you agree to the LinkedIn User Agreement,<br/> 
            Privacy Policy, and Cookie Policy.
          </Typography>

          <Button variant='contained' color='primary' fullWidth color='secondary' className={classes.button}>
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

export default withStyles(WrapperSignup)(SimpleCard)
