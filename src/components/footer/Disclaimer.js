import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import DisclaimerStyles from '../../styles/Disclaimer.styles'

function CompanyFooter(props) {
  const {classes, data} = props;

  return (
    <div className={classes.root}>
      <ul className={classes.link}>
        {data.map((link, index) => (
          <li key={index} className={classes.directories}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

  CompanyFooter.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(DisclaimerStyles)(CompanyFooter);