import React, { Fragment } from 'react'
import Navbar from '../src/components/navbar'
import BackdropImage from '../src/components/mainContent/backdrop-image'
import UserSearch from '../src/components/footer/userSearch'
import HelperMenu from '../src/components/footer/helperMenu'
import Disclaimer from '../src/components/footer/Disclaimer'

class Index extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar />
                <BackdropImage />
                <UserSearch />
                <HelperMenu />
                <Disclaimer /> 
            </Fragment>
        )
    }
}
export default Index