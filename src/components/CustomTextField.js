import React from 'react'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import {withStyles} from '@material-ui/core/styles'

import CustomTextFieldStyles from '../styles/customTextField.Styles'

function CustomTextField(props) {
    const {
        label,
        classes,
        ...rest
    } = props

    return (
        <FormControl fullWidth>
            <Typography variant='subtitle2' gutterBottom style={{marginTop: '5px'}}>{label}</Typography>

            <TextField
                {...rest}
                margin='none'
                variant='outlined'
                className={classes.customTextField}
            />
        </FormControl>
    )
}

export default withStyles(CustomTextFieldStyles)(CustomTextField)
