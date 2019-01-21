import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';
// Styles
import Navbar from '../../styles/styles.scss';
import SearchPanelStyles from '../../styles/SearchPanel.styles'

class userSearch extends React.Component {
    state = {
        value: 0,
      };

      handleChange = (event, value) => {
        this.setState({value});
      };

    render() {
        const {classes, data} = this.props;

        return(
            <Fragment>
                <div className={classes.root}>
                    <FormControl className={classes.margin}>
                        <label className={classes.labelInput}>Find a colleague</label>
                        <InputBase
                            id='bootstrap-input'
                            type='text'
                            placeholder='First Name'
                            classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                            }}
                        />
                        <InputBase
                            id='bootstrap-input'
                            type='text'
                            placeholder='Last Name'
                            classes={{
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                            }}
                        />
                            <Button variant='contained' disabled className={classes.button}>
                                Search
                            </Button>
                        </FormControl>
                </div>

                <div className={classes.root}>
                    <label className={classes.margin}>LinkedIn member directory:</label>
                    <ul className={classes.link}>
                        {
                            data.map((link, index)=>(
                                <li key={index} >
                                <a className={classes.directories} href={link.href}>{link.text}</a>
                                </li>
                            ))
                        }
                        <li><a href='#' className={classes.directories} style={{marginRight: '25px'}}>More</a></li>
                    </ul>
                    <label className={classes.margin}><a href='#' className={classes.directories}>Browse by country/region</a></label>
                </div>
                <Divider variant='middle' color='primary' className={classes.divider}/>
            </Fragment>   

        );
    }
}

userSearch.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(SearchPanelStyles)(userSearch);
