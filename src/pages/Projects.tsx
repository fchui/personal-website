import React from 'react'

import { Title, Container} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../components/index';

export const Projects = () => {
  return (
    <>
      <PreviewCarousel />
      <Container>
        <Title align="left">Project Title</Title>
        <ImageCarousel />
        <ProjectDescription />
      </Container>
    </>
  );
};