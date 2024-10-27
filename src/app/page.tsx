'use client'
import Hero from '@/features/Landing/Hero';
import { Container } from '@mantine/core';

import Map from '@/components/Map';
const page = () => {
  return (
      < >
     <Hero/>
     <Container mt="-3rem" px='1rem' mb="2rem">
        <Map/>
      </Container>
    </>
  );
}

export default page;
