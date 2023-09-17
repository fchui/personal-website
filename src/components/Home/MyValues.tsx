import { createStyles, Text, Container,Title, Group, Card, Badge, SimpleGrid, rem } from '@mantine/core'
import { IconHeartHandshake, IconPuzzle, IconCookie, IconPalette, IconFlag, IconEmpathize, IconHandGrab } from '@tabler/icons-react';
import React from 'react'

const traitdata = [
    {
      title: 'Commitment',
      description:
        'There is nothing more satisifying than a job well done. Any task assigned to me I intend to complete in an efficient and extraordinary manner.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Creativity',
      description:
        'Through my life I have learned to never get attached to a singular paradigm. I push myself to create my own thinking methods. Hence, my mind often has unique solutions for intriguing problems.',
      icon: IconPalette,
    },
    {
      title: 'Pragmatism',
      description:
        'I often keep in mind the big picture of a project and my role. If it means letting go of my personal emotions to complete a project, I am willing to do so ensure my clients are happy.',
      icon: IconPuzzle,
    },
    {
      title: 'Independence',
      description:
        'I believe that strong team consists of everyone being able to handle their tasks on their own. An independent person knows how to use dependence to their advantage.',
      icon: IconHandGrab,
    },
    {
      title: 'Leader',
      description:
        'When I am put in situations where I need to lead other people, I mantain a strong vision of the objective and delegate effectively.',
      icon: IconFlag,
    },
    {
      title: 'Empathetic',
      description:
        'As an engineer, I believe it is more important for me to listen and understand my clients vision than for me to understand my own vision. After all, a happy client is a happy me!',
      icon: IconEmpathize,
    },
  ];

const useStyles = createStyles((theme) => ({
      titleCard: {
        fontSize: rem(34),
        fontWeight: 900,
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: rem(24),
        },
      },
    
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
    
      card: {
        border: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
      },
    
      cardTitle: {
        '&::after': {
          content: '""',
          display: 'block',
          backgroundColor: theme.fn.primaryColor(),
          width: rem(45),
          height: rem(2),
          marginTop: theme.spacing.sm,
        },
      },
  }));

export function MyValues() {
    const { classes, theme } = useStyles();
    const features = traitdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" fw={400} mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">

        <Title order={2} className={classes.titleCard} ta="center" mt="sm">
          My Values
        </Title>
  
        <Text c="dimmed" className={classes.descriptionCard} ta="center" mt="md">
          Here are some attributes that I believe are important in work. When I work for my clients, prepare
          to see these traits!
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
  