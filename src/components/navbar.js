import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'

import Logo from '../images/svg/linkedin.png'
import NavbarStyle from '../styles/navbar.style'

import CustomTextField from './CustomTextField'
class Linkedin extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
          <AppBar position='static' color='primary' className={classes.navbar}>
            <Toolbar>
              <Grid item xs={6}>
                <Typography className={classes.title} variant='h6' color='inherit' noWrap>
                  <img src={Logo} alt='Company Logo' />
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes.margin}>
                <CustomTextField
                  placeholder='First Name'
                  handleChange={() => {}}
                />
                </FormControl>

                <FormControl className={classes.margin}>
                <CustomTextField
                  placeholder='Last Name'
                  type='password'
                  handleChange={() => {}}
                />
                </FormControl>

                <button variant='outlined' className={classes.button}>
                  Sign in
                </button>

                <label className={classes.subheading} variant='subtitle2' noWrap>
                    Forgot Password?
                </label>
              </Grid>
            </Toolbar>
          </AppBar>
      </div>
    )
  }
}

Linkedin.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(NavbarStyle)(Linkedin)
