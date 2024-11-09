import { createStyles, ActionIcon, Text, Container, Title, Avatar, Group, rem } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import React from 'react'

const useStyles = createStyles((theme) => ({
    description: {
      maxWidth: 600,
      margin: 'auto',
    },

    titleCard: {
        fontSize: rem(34),
        fontWeight: 900,
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: rem(24),
        },

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

    wrapper: {
      backgroundColor: '#F5F5F5',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },

    avatar: {
      size: '120',
      radius: 'lg'
    },

    social: {
      paddingTop: `calc(${theme.spacing.xl} * 1)`,
      [theme.fn.smallerThan('sm')]: {
        width: 'auto',
        marginLeft: 'auto',
      },
    },

    a: {
      textDecoration: 'none',
      color: 'white',
    }

  }));

export function AboutMe() {
    const { classes, theme } = useStyles();
  
    return (
      <div className ={classes.wrapper}>
        <Container size="lg" py="xl">
          <Title order={2} className={classes.titleCard} ta="center" mt="sm">
            About Me
          </Title>
          <Group position='center' noWrap>
              <Avatar src={'https://i.gyazo.com/a2ed4b668faf433418dacb5e742a1d29.jpg'} size={160} radius="lg" />
              <div>
                <Text fw={500} className={classes.description} ta="justify" mt="md">
                  Welcome! I'm a SFU computer engineer undergraduate passionate about technology and a drive to make impactful contributions to organizations. 
                  By staying up-to-date with the latest tech trends, I bring creative problem-solving, attention to detail, and efficiency to every project.
                  Explore my portfolio to see the dedication, skills, and value I can bring to your organization.
                </Text>
              </div>
          </Group>
          <Group className={classes.social} position='center' noWrap>
              <a className={classes.a} href="https://github.com/fchui">
                <ActionIcon variant="filled" size="xl">
                      <IconBrandGithub size="2rem" stroke={1.5}/>
                </ActionIcon>
              </a>
            <a className={classes.a} href="https://www.linkedin.com/in/francis-yk-chui/">
              <ActionIcon variant="filled" size="xl">
                  <IconBrandLinkedin size="2rem" stroke={1.5} />
              </ActionIcon>
            </a>
          </Group>
        </Container>
      </div>
    );
  }