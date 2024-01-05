import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
    'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png',
    'https://i.gyazo.com/e26ae68bbcc06b00b4af6c2b0b6cceb2.png',
    'https://i.gyazo.com/429cb1359e81a9c50f27871635187024.png',
];

export function ImageCarousel() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image width={640} height={480} radius="lg" src={url}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel align="center" slideSize="70%" slideGap="md" mx="auto" withIndicators height={480} loop>
      {slides}
    </Carousel>
  );
}