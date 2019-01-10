import React from 'react'
import { withStyles} from '@material-ui/core/styles'
import breadCrumbsStyles from '../styles/breadCrumbs.styles'
import { Typography, Grid } from '@material-ui/core';

class BreadCrumb extends React.Component {
    render() {
		const {classes, data, title} = this.props;
		console.log(title)
		return (
			<div className={classes.wrapper}>
				<Typography variant='title' color='primary' className={classes.breadCrumbTitle}>
					{title}
				</Typography>
				<ul className={classes.breadCrumb}>
					{data.map((link, index) => (
						<li key={index} className={classes.breadCrumbList} >
							<a href={link.href}>{link.text}</a>
						</li>
					))}
				</ul>
			</div>
		)
    }
}
export default withStyles(breadCrumbsStyles)(BreadCrumb)
