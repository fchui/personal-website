import React from 'react'
import { createStyles, Group, Image, Container, AspectRatio, Overlay, rem } from '@mantine/core';
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
        opacity: 0.8,
    },

      
    link: {
        display: 'block',
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        color: theme.colors.dark[0] ,
        '&:hover': {
          backgroundColor: '#A9A9A9',
        },
      },
    
      linkActive: {
        '&, &:hover': {
          backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        },
      },

  }));

interface HeaderSimpleProps {
    links: { link: string; label: string; image: string }[];
}

export function PreviewCarousel2({ links }: HeaderSimpleProps) {
    const [active, setActive] = useState(links[1].link);
    const { classes, cx } = useStyles();
    
    const slides = links.map((link) => (
        <>
            <NavLink
            to={link.link}
            key={link.label}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
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