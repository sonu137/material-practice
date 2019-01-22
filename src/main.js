import React, { Fragment } from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Grid, Divider} from '@material-ui/core';
// Imported files
import Navbar from '../src/components/navbar'
import BackdropImage from '../src/components/backdropImage'
import SearchPanel from './components/footer/searchPanel'
import BreadCrumbs from './components/breadCrumbs'
import MainStyle from './styles/main.style'

import PageStyles from './styles/styles.scss'

import {GeneralData, BrowseLinkedin, BusinessSolutions, BrowseDirectories, FooterDisclaimer} from './datas/footerWrapperData'
import {MembersDirectory} from './datas/membersBreadCrumbData'
class Index extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <Navbar />
                <BackdropImage />
                <div className={classes.WrapperPadding}>
                    <SearchPanel data={MembersDirectory} />
                    <Grid container spacing={16}>
                        <Grid item xs={6} className={classes.footerWrapper}>
                            <BreadCrumbs title='General' data={GeneralData}/>
                        </Grid>

                        <Grid item xs={6} className={classes.footerWrapper}>
                            <BreadCrumbs title='Browse Linkedin' data={BrowseLinkedin}/>
                        </Grid>

                        <Grid item xs={6} className={classes.footerWrapper}>
                            <BreadCrumbs title='Business Solution' data={BusinessSolutions}/>
                        </Grid>

                        <Grid item xs={6} className={classes.footerWrapper}>
                            <BreadCrumbs title='Browse Directories' data={BrowseDirectories}/>
                        </Grid>
                    </Grid>

                    <Divider
                        variant='middle'
                        color='primary'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: '#797c7f',
                            marginTop: '20px'
                        }}
                    />

                    <BreadCrumbs
                        data={FooterDisclaimer}
                        className={classes.link}
                    />
                </div>
            </Fragment>
        )
    }
}
export default withStyles(MainStyle)(Index);
