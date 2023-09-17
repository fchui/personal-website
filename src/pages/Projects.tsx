import React from 'react'

import { createStyles, Title, Container} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../components/index';

const useStyles = createStyles((theme) => ({
  wrapper: {
      paddingTop: `calc(${theme.spacing.xl} * 1)`,
      paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  }
}));

export const Projects = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <PreviewCarousel />
      <Container>
        <Title className={classes.wrapper} align="left">Project Title</Title>
        <ImageCarousel />
        <ProjectDescription />
      </Container>
    </>
  );
};