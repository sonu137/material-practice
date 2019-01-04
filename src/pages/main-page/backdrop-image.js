import React from 'react';
import Peoples from '../../assets/image/peoples.jpg';
import Card from './card';
import Navbar from '../../styles/navbar.scss';

class Signup extends React.Component{
    render(){
        return (
            <div>
                <Card />
                <img src={Peoples} className='peoples-image'/> 
            </div>   
          );
    }
}

export default Signup