import React from 'react'
import { createStyles, Group, Image, Container, AspectRatio, Overlay, TypographyStylesProvider, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';
import type { Projects } from '../../data';

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
          display: 'block',
          backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
          padding: `${rem(8)} ${rem(12)}`,
        },
      },

  }));

interface HeaderSimpleProps {
    links: { id: string, link: string; label: string; image: string }[];
}

export function PreviewCarousel() {
    let projects = useLoaderData() as Projects;
  
    const [active, setActive] = useState('/Projects/1');
    const { classes, cx } = useStyles();

    const slides = Object.entries(projects).map(([id, project]) => (
        <>
            <NavLink
            to={`/Projects/${id}`}
            key={id}
            className={({ isActive }) => isActive ? classes.linkActive : classes.link } 
            onClick={(event) => {
                setActive(`/Projects/${id}`);
            }}
            >
                <Image className={classes.image} radius="md" src={project.previewImage} width={150} height={100}/>
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