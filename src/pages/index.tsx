import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BlogList from "../componments/BlogList";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../componments/ReNext'), {
    ssr: false,
})
const Home: NextPage = () => {

  
  return (
    <Container >
      <Box>
          <BlogList />
          <DynamicComponentWithNoSSR />
      </Box>
    </Container>
  );
};

export default Home;
