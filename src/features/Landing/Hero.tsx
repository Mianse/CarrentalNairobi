import { Container } from '@mantine/core';
import React from 'react';
import Slide from './Slide';
import classes from './styles.module.css'
import SearchEngine from '@/components/SearchEngine';

const Hero = () => {
  return (
    <Container fluid pb="4rem" className={classes.hero}>
      <Slide/>
      <Container>
      <SearchEngine/>
      </Container>
    </Container>
  );
}

export default Hero;
