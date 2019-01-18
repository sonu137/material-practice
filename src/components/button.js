import React from 'react'
import Propstypes from 'prop-types'

import {withStyles} from '@material-ui/core/styles'
import classNames from 'classnames'

import buttonStyles from '../styles/button'

class RegularButton extends React.Component {
    render() {
        const {
            classes, // defines props for classes attribute
            color, // defines stores color in styles
            size, // defines stored size 
            className = '', // it defines the class name and it can be sent to the user as empty string instead of undefined
            ...rest // stores anonymous props from the user
        } = this.props

        const buttonClasses = classNames({
            [classes.button]: true, // it takes the button class
            [classes[size]]: size, // the value of size stores in size eg.sm or lg
            [classes[color]]: color, // the value of color stores in color value eg.primary,secondry etc.
            [className]: true // its independent.
        })

        return (
            <button
                className={buttonClasses}
                {...rest}
            >
                Button
            </button>
        );
    }
}

RegularButton.Propstypes = {
    classes: Propstypes.object.required,
    color: Propstypes.oneOf([ // defined required props to use in the available colors.
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        false
    ]),
    className: Propstypes.string,
    size: Propstypes.oneOf([ // defines the available size.
        'sm',
        'lg',
        false
    ]),
}


export default withStyles(buttonStyles)(RegularButton);
