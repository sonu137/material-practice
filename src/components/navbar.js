import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

import {withStyles} from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Logo from '../images/svg/linkedin.png'

import Navbar from '../styles/styles.scss'
import NavbarStyle from '../styles/navbar.style'

class Linkedin extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
          <AppBar position='static' color='primary' className={classes.navbar}>
            <Toolbar>
              <Grid item xs={6}>
                <Typography className={classes.title} variant='h6' color='inherit' noWrap>
                  <img src={Logo} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={classes.margin}>
                  <InputBase
                    id='bootstrap-input'
                    type='Email'
                    placeholder='Email'
                    classes={{
                    root: classes.bootstrapRoot,
                    input: classes.bootstrapInput,
                    }}
                  />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputBase
                      id='bootstrap-input'
                      type='password'
                      placeholder='Password'
                      classes={{
                      root: classes.bootstrapRoot,
                      input: classes.bootstrapInput,
                      }}
                    />
                </FormControl>
                <Button variant='outlined' className={classes.button}>
                  Sign in
                </Button>
                <Typography className={classes.subheading} variant='subheading' noWrap>
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
}

export default withStyles(NavbarStyle)(Linkedin);
