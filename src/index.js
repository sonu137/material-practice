import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import * as serviceWorker from './serviceWorker';
// import {MuiThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'

// ReactDOM.render(<MuiThemeProvider theme={theme}><SimpleModal /></MuiThemeProvider>, document.getElementById('root'));
ReactDOM.render(
    <Button 
        danger
        size = 'lg'
    /> , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
