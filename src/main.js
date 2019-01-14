import React, { Fragment } from 'react'
import Navbar from '../src/components/navbar'
import BackdropImage from '../src/components/mainContent/backdrop-image'
import UserSearch from './components/footer/userSearch'
import HelperMenu from '../src/components/footer/helperMenu'
import Disclaimer from '../src/components/footer/Disclaimer'
import BreadCrumbs from './components/breadCrumbs'
import {Grid} from '@material-ui/core';


const GeneralData = [

    {
        text: 'Sign Up',
        link: '#'
    },

    {
        text: 'Help Center',
        link: '#'
    },

    {
        text: 'About',
        link: '#'
    },

    {
        text: 'Press',
        link: '#'
    },

    {
        text: 'Blog',
        link: '#'
    },

    {
        text: 'Careers',
        link: '#'
    },

    {
        text: 'Developers',
        link: '#'
    },
]

const BusinessSolutions = [

    {
        text: 'Talent',
        link: '#'
    },

    {
        text: 'Marketing',
        link: '#'
    },

    {
        text: 'Sales',
        link: '#'
    },

    {
        text: 'Learning',
        link: '#'
    },

    {
        text: 'Company Pages',
        link: '#'
    },

]

const BrowseLinkedin = [

    {
        text: 'Learning',
        link: '#'
    },

    {
        text: 'Jobs',
        link: '#'
    },

    {
        text: 'Mobile',
        link: '#'
    },

    {
        text: 'ProFinder',
        link: '#'
    },

]

const BrowseDirectories = [

    {
        text: 'Members',
        link: '#'
    },

    {
        text: 'Jobs',
        link: '#'
    },

    {
        text: 'Companies',
        link: '#'
    },

    {
        text: 'Salaries',
        link: '#'
    },

    {
        text: 'Universities',
        link: '#'
    },

    {
        text: 'Top Jobs',
        link: '#'
    },

]

const FooterDisclaimer = [

    {
        text: 'Linkedin © 2019',
        link: '#'
    },

    {
        text: 'User Agreement',
        link: '#'
    },

    {
        text: 'Privacy Policy',
        link: '#'
    },

    {
        text: 'Community Guidelines',
        link: '#'
    },

    {
        text: 'Cookie Policy',
        link: '#'
    },

    {
        text: 'Copyright Policy',
        link: '#'
    },

    {
        text: 'Guest Controls',
        link: '#'
    },

    {
        text: 'Language',
        link: '#'
    },

]

class Index extends React.Component { 
    render() {
        return (
            <Fragment>
                <Navbar />
                <BackdropImage />
                <UserSearch />
                <HelperMenu />
                <Disclaimer data ={FooterDisclaimer} />
                
                <Grid container spacing={16}>
                    <Grid item xs={6} >
                        <BreadCrumbs title='General' data={GeneralData}/>
                    </Grid>

                    <Grid item xs={6} >
                        <BreadCrumbs title='Browse Linkedin' data={BrowseLinkedin}/>
                    </Grid>

                    <Grid item xs={6}>
                        <BreadCrumbs title='Business Solution' data={BusinessSolutions}/>
                    </Grid>

                    <Grid item xs={6}>
                        <BreadCrumbs title='Browse Directories' data={BrowseDirectories}/>
                    </Grid>
                </Grid>

            </Fragment>
        )
    }
}
export default Index
