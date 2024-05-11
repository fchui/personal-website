import { createStyles, Text, Container,Title, Group, Card, Badge, SimpleGrid, rem } from '@mantine/core'
import { IconHeartHandshake, IconPuzzle, IconCookie, IconPalette, IconFlag, IconEmpathize, IconHandGrab } from '@tabler/icons-react';
import React from 'react'

const traitdata = [
    {
      title: 'Commitment',
      description:
        'I am deeply committed to delivering exceptional results in everything I undertake. Every task I take on is approached with a strong sense of dedication and a focus on achieving excellence.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Creativity',
      description:
        'Throughout my journey, I have embraced the power of creativity. I constantly challenge myself to think outside the box, pushing the boundaries of what is possible. This mindset allows me to approach problems with fresh perspectives and find innovative solutions.',
      icon: IconPalette,
    },
    {
      title: 'Pragmatism',
      description:
        'I believe in the importance of maintaining a practical and pragmatic approach to projects. While keeping sight of the big picture, I strive to balance efficiency, quality, and client satisfaction. I am willing to adapt and make tough decisions when necessary to ensure successful outcomes.',
      icon: IconPuzzle,
    },
    {
      title: 'Independence',
      description:
        'I value the ability to work independently and take ownership of my responsibilities. I have developed a strong sense of self-reliance, allowing me to contribute effectively to projects while also collaborating seamlessly within a team.',
      icon: IconHandGrab,
    },
    {
      title: 'Leader',
      description:
        'When presented with leadership opportunities, I embrace them with a clear vision and a focus on inspiring and motivating others. I believe in empowering team members, fostering a collaborative environment, and driving collective success.',
      icon: IconFlag,
    },
    {
      title: 'Empathetic',
      description:
        'Understanding and empathizing with others is at the core of my approach. I prioritize active listening and open communication to grasp the needs and aspirations of clients and colleagues. Putting myself in their shoes, I can better tailor my solutions and build strong, meaningful relationships.',
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
          These values form the foundation of my professional character and guide me in delivering impactful results. 
          I invite you to explore my website further to gain deeper insights into my work and the value I can bring to your projects.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
  