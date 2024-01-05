import React from 'react'

import { createStyles, Container, Text, TypographyStylesProvider} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../components/index';
import { Routes, Route, Outlet, useLoaderData } from 'react-router-dom';
import type { Projects } from '../projects';


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

  return (
    <>
      <PreviewCarousel/>
      <Outlet /> 
    </>
  );
};