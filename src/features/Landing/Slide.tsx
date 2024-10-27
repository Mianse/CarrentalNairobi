"use client"
import React from 'react'
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { Center } from '@mantine/core';

const Slide = () => {
    const images =[
        'https://res.cloudinary.com/dz4zzzr5c/image/upload/v1730026223/bii/mpevbx1tq2agwil4qonq.jpg',
        "https://res.cloudinary.com/dz4zzzr5c/image/upload/v1730026238/bii/wpagritxfg4zzem0fjco.jpg"
    ]
  return (
    <Carousel withIndicators loop>
        {images.map((image)=>(
          <Carousel.Slide key={image} mt="2rem">
            <Center h={{base: 300,md: 400,xl:600}}>
            <Image src={image} alt=''/>

            </Center>
          </Carousel.Slide>
        ))}
    </Carousel>
  )
      
  
}

export default Slide
