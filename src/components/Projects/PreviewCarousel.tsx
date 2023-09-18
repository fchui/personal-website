import React from 'react'
import { createStyles, Group, Image, Container, AspectRatio, Overlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

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

interface HeaderSimpleProps {
    links: { link: string; label: string; image: string }[];
}

export function PreviewCarousel({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, theme } = useStyles();
    
    const slides = links.map((link) => (
        <>
            <NavLink
            to={link.link}
            key={link.label}
            onClick={(event) => {
            setActive(link.link);
            }}
            >
                <Image className={classes.image} radius="md" src={link.image} width={150} height={100}/>
            </NavLink>
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