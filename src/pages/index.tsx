import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BlogList from "../componments/BlogList";
import dynamic from 'next/dynamic'
import Grid from '@mui/material/Grid';

const DynamicComponentWithNoSSR = dynamic(() => import('../componments/ReNext'), {
    ssr: false,
})
const Home: NextPage = () => {

  
  return (
    <div >
          <Grid container spacing={2}>
              <Grid item xs={2}>
                  <BlogList />
              </Grid>
              <Grid item xs={8}>
                  <DynamicComponentWithNoSSR />
              </Grid>
          </Grid>
    </div>
  );
};

export default Home;
