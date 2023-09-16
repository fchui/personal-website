import { createStyles, Text, Container,Title, rem } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
    descriptionCard: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },

    titleCard: {
        fontSize: rem(34),
        fontWeight: 900,
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: rem(24),
        },
    },
    
    aboutMeDiv: {
      backgroundColor: '#F5F5F5',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  }));

export function AboutMe() {
    const { classes, theme } = useStyles();
  
    return (
      <div className ={classes.aboutMeDiv}>
        <Container size="lg" py="xl">
          <Title order={2} className={classes.titleCard} ta="center" mt="sm">
            About Me
          </Title>
          
          <Text c="dimmed" className={classes.descriptionCard} ta="center" mt="md">
            Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
            hunger drives it to try biting a Steel-type Pokémon.
          </Text>
        </Container>
      </div>
    );
  }