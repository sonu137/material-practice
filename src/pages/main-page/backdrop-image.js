import React from 'react';
import Peoples from '../../assets/image/peoples.jpg';
import Card from './card';
import Navbar from '../../styles/navbar.scss';

class Signup extends React.Component{
    render(){
        return (
            <div className='peoples-image'>
                <Card />
                <img src={Peoples}/> 
            </div>   
          );
    }
}

export default Signup