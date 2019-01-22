import React from 'react'

import Peoples from '../images/jpg/peoples.jpg'
import Card from '../wrapperSignup'

class Signup extends React.Component {
    render() {
        return (
            <div>
                <Card />
                <div className='peoples-image'>
                    <img src={Peoples} alt='Peoples background'/>
                </div>
            </div>
        )
    }
}

export default Signup
