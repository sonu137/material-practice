import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {
    button: {
        padding: 10,
        backgroundColor: '#f2f2f0',
        color: '#000',
        borderRadius: 5,
        border: '1px solid #fff',
        fontSize: 15,
        cursor: 'pointer'
    },

    primary: {
        backgroundColor: '#007bff',
        color: '#fff'
    },

    secondary: {
        backgroundColor: '#6c757d',
        color: '#fff',
    },

    success: {
        backgroundColor: '#1e7e34',
        color: '#fff',
    },

    danger: {
        backgroundColor: '#dc3545',
        color: '#fff',
    },

    warning: {
        backgroundColor: '#ffc107',
        color: '#212529',
    },

    info: {
        backgroundColor: '#17a2b8',
        color: '#fff',
    },

    sm: {
        fontSize: 10,
        padding: 6,
    },

    lg: {
        fontSize: 20,
        padding: 20,
    }
};

class RegularButton extends React.Component {
    render() {
        const {
            classes,
            primary,
            secondary,
            success,
            warning,
            info,
            danger,
            size,
        } = this.props;

        console.log('this.props', this.props)

        return (
            <button
                className={`
                    ${classes.button}
                    ${size === 'sm' ? classes.sm : size === 'lg' ? classes.lg : ''}
                    ${primary  ? classes.primary : ''}
                    ${secondary  ? classes.secondary : ''}
                    ${success  ? classes.success : ''}
                    ${warning  ? classes.warning : ''}
                    ${info  ? classes.info : ''}
                    ${danger  ? classes.danger : ''}
                `}
            >
                Button
            </button>
        );
    }
}
export default withStyles(styles)(RegularButton);
