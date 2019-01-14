import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../styles/styles.scss';

const styles = theme =>({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      marginTop: '15px',

    },
    margin: {
        margin: '0',
        display: 'inline-block',
      },
    bootstrapInput: {
        border: '1px solid grey',
        padding: '5px',
        backgroundColor: 'white',
        borderRadius: '2px',
    },
    labelInput: {
        padding: '5px',
        color: '#fff',
    },
    button: {
        color: '#abb0b5 !important',
        fontSize: '12px',
        border: '1px solid #abb0b5',
        borderRadius: '2px',
        backgroundColor: 'transparent',
        minHeight: '32px !important',
        marginLeft: '5px !important',
    },
    link: {
        color: 'white',
        display: 'flex',
        listStyle: 'none',
        margin: '0',
    },
    directories: {
        color: 'white',
        marginRight: '10px',
        textDecoration: 'none',
        '&:hover': {
            fontWeight: 'bolder',
        },
    },
    divider: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#797c7f',
        marginTop: '20px',
    }
  });

class userSearch extends React.Component{
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
      
    render(){
        const { classes } = this.props;
        const { value } = this.state;

        return(
            <Fragment>
                <div className={classes.root}>
                    <FormControl className={classes.margin}>
                        <label className={classes.labelInput}>Find a colleague</label>
                        <InputBase
                            id="bootstrap-input"
                            type="text"
                            placeholder="First Name"
                            classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                            }}
                        />
                        <InputBase
                            id="bootstrap-input"
                            type="text"
                            placeholder="Last Name"
                            classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                            }}
                        />
                            <Button variant="contained" disabled className={classes.button}>
                                Search
                            </Button>
                        </FormControl>
                </div>
                <div className={classes.root}>
                    <label className={classes.margin}>LinkedIn member directory:</label>
                    <ol className={classes.link}>
                        <li><a href="#" className={classes.directories}>A</a></li>
                        <li><a href="#" className={classes.directories}>B</a></li>
                        <li><a href="#" className={classes.directories}>C</a></li>
                        <li><a href="#" className={classes.directories}>D</a></li>   
                        <li><a href="#" className={classes.directories}>E</a></li>
                        <li><a href="#" className={classes.directories}>F</a></li>
                        <li><a href="#" className={classes.directories}>G</a></li>
                        <li><a href="#" className={classes.directories}>H</a></li>
                        <li><a href="#" className={classes.directories}>I</a></li>   
                        <li><a href="#" className={classes.directories}>J</a></li>
                        <li><a href="#" className={classes.directories}>K</a></li>
                        <li><a href="#" className={classes.directories}>L</a></li>
                        <li><a href="#" className={classes.directories}>M</a></li>
                        <li><a href="#" className={classes.directories}>N</a></li>   
                        <li><a href="#" className={classes.directories}>O</a></li>
                        <li><a href="#" className={classes.directories}>P</a></li>
                        <li><a href="#" className={classes.directories}>Q</a></li>
                        <li><a href="#" className={classes.directories}>R</a></li>
                        <li><a href="#" className={classes.directories}>S</a></li>   
                        <li><a href="#" className={classes.directories}>T</a></li>
                        <li><a href="#" className={classes.directories}>U</a></li>
                        <li><a href="#" className={classes.directories}>V</a></li>
                        <li><a href="#" className={classes.directories}>W</a></li>
                        <li><a href="#" className={classes.directories}>X</a></li>   
                        <li><a href="#" className={classes.directories}>Y</a></li>
                        <li><a href="#" className={classes.directories}>Z</a></li>
                        <li><a href="#" className={classes.directories} style={{marginRight: '25px'}}>More</a></li>
                    </ol>
                    <label className={classes.margin}><a href="#" className={classes.directories}>Browse by country/region</a></label>
                </div>
                <Divider variant="middle" color="primary" className={classes.divider}/>
            </Fragment>   

        );
    }
}

userSearch.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(userSearch);