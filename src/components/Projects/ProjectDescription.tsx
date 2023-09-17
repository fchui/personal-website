import React from 'react'
import { createStyles, Title, Text, Container, Grid, Skeleton, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    },

    grid: {
        borderRight: `${rem(2)} solid ${theme.colors.gray[2]}`,
    },

    title: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    },

    description: {
        margin: 'auto'
    }
  }));

export function ProjectDescription() {
    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <Title className={classes.title} align={'left'} order={2}>Attractive website using the React framework</Title>
                            <Text className={classes.description} align={'left'}>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</Text>
                            <Title className={classes.title} align={'left'} order={3}>Modern Frameworks</Title>
                            <Text className={classes.description}align={'left'}>Through learning modern frameworks, the potential to create higher quality products increases. That's why I am always open to learning new ideas to increase the quality of my code. 
                            As well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</Text>
                            <Title className={classes.title} align={'left'} order={3}>React Routing</Title>
                            <Text className={classes.description} align={'left'}>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading.
                            Through using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</Text>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <Title className={classes.title} align={'left'} order={4}>Github Link:</Title>
                            <Text className={classes.description} align={'left'}><a href="https://github.com/fchui/personal-website">https://github.com/fchui/personal-website</a></Text>
                            <Title className={classes.title} align={'left'} order={4}>Date Created:</Title>
                            <Text className={classes.description} align={'left'}>Aug 23, 2023</Text>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }