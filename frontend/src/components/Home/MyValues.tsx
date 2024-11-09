import { createStyles, Text, Container,Title, Group, Card, Badge, SimpleGrid, rem } from '@mantine/core'
import { IconHeartHandshake, IconPuzzle, IconCookie, IconPalette, IconFlag, IconEmpathize, IconHandGrab } from '@tabler/icons-react';
import React from 'react'

const traitdata = [
    {
      title: 'Commitment',
      description:
        'I am fully dedicated to achieving exceptional results in everything I undertake. I approach each task with a commitment to excellence and an unwavering focus on quality and impact.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Creativity',
      description:
        'My creativity drives me to think unconventionally, consistently challenging myself to explore new possibilites and embrace fresh perspectives. This mindset empowers me to tackle problems innovatively and discover unique solutions.',
      icon: IconPalette,
    },
    {
      title: 'Pragmatism',
      description:
        'I take a practical, results-driven approach to projects. Focused on the bigger picture, I prioritize balancing efficiency, quality, and client satisfaction. I\'m adaptable and willing to make tough decisions to ensure successful outcomes.',
      icon: IconPuzzle,
    },
    {
      title: 'Independence',
      description:
        'I value the ability to work independently and take ownership of my responsibilities. My strong sense of self-reliance enables me to contribute effectively to projects, while my collaborative spirit ensures I integrate seamlessly within a team.',
      icon: IconHandGrab,
    },
    {
      title: 'Leader',
      description:
        'When given leadership opportunities, I take initiative with a clear vision, focusing on motivating and inspiring others. I believe in fostering a collaborative environment where team members can thrive, and I am committed to driving collective success through shared goals and mutual support.',
      icon: IconFlag,
    },
    {
      title: 'Empathetic',
      description:
        'Empathy in central to my approach in teams. I prioritize active listening and open communication to understand the needs and aspirations of clients and colleagues. Putting myself in their shoes, I can tailor my solutions more effectively and build strong, meaningful relationships.',
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
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
  