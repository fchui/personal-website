import React from 'react'

import { createStyles, Container, Text} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../components/index';
import { Routes, Route, Outlet, useLoaderData } from 'react-router-dom';
import type { Projects } from '../projects';
import { Projects2 } from './';
import { getProjects } from '../projects';

var links = [
    {
      "id": "1",
      "link": "/Projects/1", 
      "label": "1", 
      "image": 'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png'
    },
    { 
      "id": "2",
      "link": "/Projects/2", 
      "label": "2", 
      "image": "https://i.gyazo.com/5ef65a7220bf3bfb4bbc17a2a51848a0.png"
    }
]

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
  },

  title: {
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  }
}));

export const ProjectIndex = () => {
  const { classes, theme } = useStyles();
  // let projects = useLoaderData() as Projects;

  return (
    <>
      <PreviewCarousel links={links}/>
      <Outlet />    
    </>
  );
};