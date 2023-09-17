import React from 'react'
import { createStyles, Group, Image, Container, AspectRatio, Overlay } from '@mantine/core';

const images = [
    'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png',
];

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
        backgroundColor: 'lightgray',
    },

    image: {
        position: 'relative',
        opacity: 0.45,
    },
  }));

export function PreviewCarousel() {
    const { classes, theme } = useStyles();
    
    const slides = images.map((url) => (
        <>
            <Image className={classes.image} radius="md" src={url} width={150} height={100}/>
        </>
    ));

  return (
    <div className ={classes.wrapper}>
        <Group position='center'>
            {slides}
        </Group>
    </div>
  );
}