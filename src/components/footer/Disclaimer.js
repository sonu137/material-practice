import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = themes => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    margin: '15px 0',

  },

  link: {
      color: 'white',
      display: 'flex',
      listStyle: 'none',
      margin: '0',
  }, 
  directories: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '14px',
    '&:hover': {
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
  },
});

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

  export default withStyles(styles)(CompanyFooter);