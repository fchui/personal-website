import React from 'react'

import { createStyles, Title, Container} from '@mantine/core'
import { PreviewCarousel2, ImageCarousel2, ProjectDescription2 } from '../components/index';

var links = [
  {
    "link": "../Projects/1", 
    "label": "1", 
    "image": 'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png'
  },
  { 
    "link": "../Projects/2", 
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

export const Projects2 = () => {
const { classes, theme } = useStyles();

return (
  <>
    <Container className={classes.wrapper} >
      <Title className={classes.title} align="left">DIRTS - Capstone Project</Title>
      <ImageCarousel2 />
      <ProjectDescription2 />
    </Container>
  </>
);
};