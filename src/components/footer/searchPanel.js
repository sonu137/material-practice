import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import {withStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
// Styles
import SearchPanelStyles from '../../styles/searchPanel.Styles'
import CustomTextField from '../CustomTextField'

class userSearch extends React.Component {
    state = {
        value: 0,
      }

      handleChange = (event, value) => {
        this.setState({value});
      }

    render() {
        const {classes, data} = this.props

        return (
            <Fragment>
                <div className={classes.root}>
                        <label className={classes.labelInput}>Find a colleague</label>
                        <form className={classes.margin}>
                            <CustomTextField
                                type='text'
                                name='First Name'
                                placeholder='First Name'
                                className={classes.bootstrapInput}
                            />
                         </form>
                         <form className={classes.margin}>
                            <CustomTextField
                                type='text'
                                name='Last Name'
                                placeholder='Last Name'
                                className={classes.bootstrapInput}
                            />
                        </form>
                        <form className={classes.margin}>
                            <button className={classes.button}>
                                Search
                            </button>
                        </form>
                   
                </div>

                <div className={classes.root}>
                    <label className={classes.margin}>LinkedIn member directory:</label>

                    <ul className={classes.link}>
                        {
                            data.map((link, index) => (
                                <li key={index}>
                                <a
                                    className={classes.directories}
                                    href={link.href}
                                >
                                {link.text}
                                </a>
                            </li>
                            ))
                        }

                        <li>
                            <a
                                href='#'
                                className={classes.directories}
                                style={{marginRight: '25px'}}
                            >
                            More
                            </a>
                        </li>
                    </ul>

                    <label className={classes.margin}>
                        <a href='#' className={classes.directories}>
                            Browse by country/region
                        </a>
                    </label>
                </div>

                <Divider variant='middle' color='primary' className={classes.divider}/>
            </Fragment>
        )
    }
}

userSearch.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(SearchPanelStyles)(userSearch)
