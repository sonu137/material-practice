import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core';

import breadCrumbsStyles from '../styles/breadCrumbs.styles'

class BreadCrumb extends React.Component {
    render() {
		const {classes, data, title} = this.props;

		return (
			<div className={classes.breadCrumbWrapper}>
				<Typography variant='title' color='primary' className={classes.breadCrumbTitle}>
					{title}
				</Typography>
				<div className={classes.breadCrumbList}>
					<ul className={classes.breadCrumb}>
						{
							data.map((link, index) => (
								<li key={index} className={classes.breadCrumbList} >
									<a href={link.href}>{link.text}</a>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		)
    }
}
export default withStyles(breadCrumbsStyles)(BreadCrumb)
