import React from 'react'

import { createStyles, Title, Container} from '@mantine/core'
import { ImageCarousel, ProjectDescription } from '../components/index';
import { useLoaderData, useParams } from 'react-router-dom';
import type { Projects } from '../data/projectdata';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
  },

  title: {
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  }
}));

export const Project = () => {
  const { classes, theme } = useStyles();
  let projects = useLoaderData() as Projects;
  let { projectId } = useParams();

  if (!projectId)
  {
    throw new Error("expected projectId")
  }

  return (
    <>
      <Container className={classes.wrapper} >
        <Title className={classes.title} align="left">{projects[projectId].title}</Title>
        <ImageCarousel />
        <ProjectDescription />
      </Container>
    </>
  );
};