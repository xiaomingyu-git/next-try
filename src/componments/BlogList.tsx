import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {getAllPosts} from "../utils/getAllPosts";
import Link from "../Link";



const BlogList:React.FC =() =>{

	return(
		<div>
			{getAllPosts().map(({ slug, module: { default: Component, meta } }, index) => (
				<Link href={`/blog/${slug}`} key={index} >
				<ListItem button key={index}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
						<ListItemText primary= {meta.title} />
				</ListItem>
				</Link>
			))}
		</div>
	)
}

export  default  BlogList;