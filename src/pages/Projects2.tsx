import React from 'react'

import { createStyles, Title, Container} from '@mantine/core'
import { PreviewCarousel, ImageCarousel, ProjectDescription } from '../components/index';

var links = [
  {
    "link": "../Projects/1", 
    "label": "1", 
    "image": 'https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png'
  },
  { 
    "link": "../Projects/2", 
    "label": "2", 
    "image": "https://i.gyazo.com/5946002de9c0230a6b1bdf777d86fee0.png"
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
    <PreviewCarousel links={links}/>
    <Container className={classes.wrapper} >
      <Title className={classes.title} align="left">Personal Website</Title>
      <ImageCarousel />
      <ProjectDescription />
    </Container>
  </>
);
};