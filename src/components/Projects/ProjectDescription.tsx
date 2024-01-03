import React from 'react'
import { createStyles, Title, Text, Container, Grid, Skeleton, rem, TypographyStylesProvider } from '@mantine/core'
import DOMPurify from 'isomorphic-dompurify'

const useStyles = createStyles((theme) => ({
    description: {
        textAlign: 'start'
    },

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
  }));

export function ProjectDescription() {
    const data = ' \
        <h2>Attractive website using the React framework</h2> \
        <p>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</p> \
        <h3>Modern Frameworks</h3> \
        <p>Through learning modern frameworks, the potential to create higher quality products increases. That\'s why I am always open to learning new ideas to increase the quality of my code. \
        As well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</p> \
        <h3>React Routing</h3> \
        <p>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading. \
        Through using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</p> \
    '

    const dataInfo = '\
        <h4>Github Link:</h4> \
        <p><a href="https://github.com/fchui/personal-website">https://github.com/fchui/personal-website</a></p> \
        <h4>Date Created:</h4> \
        <p>Aug 23, 2023</p> \
    '

    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(data)
    })

    const sanitizedDataInfo = () => ({
        __html: DOMPurify.sanitize(dataInfo)
    })

    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <TypographyStylesProvider className={classes.description}>
                                <div dangerouslySetInnerHTML={sanitizedData()} />
                            </TypographyStylesProvider>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <TypographyStylesProvider className={classes.description}>
                                <div dangerouslySetInnerHTML={sanitizedDataInfo()} />
                            </TypographyStylesProvider>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }