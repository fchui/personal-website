import React, { useState, useEffect } from 'react'

import { createStyles} from '@mantine/core'
import { PreviewCarousel } from '../components/index';
import { Outlet} from 'react-router-dom';
import type { Projects } from '../projects';

export interface merchants {
  [key: string]: { name: string, email: string };
}

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