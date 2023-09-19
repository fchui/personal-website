import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
    'https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png',
    'https://i.gyazo.com/f6fa1beac5de26bceb8cc1db120f0d29.png',
    'https://i.gyazo.com/f5ff541950e0112d42179c7694991ae9.png',
];

export function ImageCarousel2() {
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