import * as React from 'react';
import BlogList from "./BlogList";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// @ts-ignore
const BlogArticalLayout:React.FC =({meta ,children}) =>{
	
	return(
		<div>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<BlogList />
				</Grid>
				<Grid item xs={8}>
					{children}
				</Grid>
			</Grid>
		</div>
	)
}

export  default  BlogArticalLayout;