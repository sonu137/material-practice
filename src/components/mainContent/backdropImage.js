import React from 'react';

import Peoples from '../../images/jpg/peoples.jpg';
import Card from './wrapperSignup';
import Navbar from '../../styles/styles.scss';

class Signup extends React.Component {
    render() {
        return (
            <div className='peoples-image'>
                <Card />
                <img src={Peoples}/> 
            </div>
        );
    }
}

export default Signup
