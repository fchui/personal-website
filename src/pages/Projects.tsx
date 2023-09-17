import React from 'react'

import {  Title, Container} from '@mantine/core'
import { ImageCarousel, ProjectDescription } from '../components/index';

export const Projects = () => {
  return (
    <>
      <Container>
        <Title align="left">Project Title</Title>
        <ImageCarousel />
        <ProjectDescription />
      </Container>
    </>
  );
};