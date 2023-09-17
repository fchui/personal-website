import React from 'react'
import { createStyles, Group, Image, Container, AspectRatio, Overlay } from '@mantine/core';

const images = [
    'https://images.unsplash.com/photo-1694782172333-2703f5573b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
];

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
        backgroundColor: 'lightgray',
    },

    image: {
        position: 'relative',
        opacity: 0.50,
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