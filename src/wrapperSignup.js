import React from 'react'
import PropTypes from 'prop-types'

import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import InputBase from '@material-ui/core/InputBase'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
// Styling and file transfers
import WrapperSignup from './styles/wrapperSignup.Styles'
import CustomTextField from './components/CustomTextField'

function SimpleCard(props) {
  const {classes} = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color='textSecondary' variant='title' gutterBottom>
        Be great at what you do
        </Typography>

        <Typography variant='subheading' component='h2' className={classes.subtitle} >
        Get started - it's free.
        </Typography>

        <Divider fullWidth className={classes.divider}/>

        <div className={classes.formsdata}>
          <CustomTextField
            label='First Name'
            placeholder='First Name'
            handleChange={() => {}}
          />

          <CustomTextField
            label='Last name'
            placeholder='Last Name'
            handleChange={() => {}}
          />

          <CustomTextField
            label='Email'
            placeholder='Email'
            handleChange={() => {}}
          />

          <CustomTextField
            label='Password (6 or more characters)'
            placeholder='Password'
            handleChange={() => {}}
          />

          <Typography gutterBottom align='center' className={classes.policy}>
            By clicking Join now, you agree to the LinkedIn User Agreement,<br/>
            Privacy Policy, and Cookie Policy.
          </Typography>

          <Button variant='contained' fullWidth color='secondary' className={classes.button}>
            Join now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(WrapperSignup)(SimpleCard)
