import React from 'react'
import { createStyles, Title, Text, Container, Grid, Skeleton, rem, TypographyStylesProvider } from '@mantine/core'

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

export function ProjectDescription2() {
    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <TypographyStylesProvider className={classes.description}>
                                <div>
                                    <h2>Helpful Assistant For Gardeners</h2>
                                    <p>Capstone Presentation: <a href="https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s">https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s</a></p>
                                    <p>DIRTS is a sensor package that sends soil data directly to your mobile phone via Bluetooth. The application processes soil data and is able to give suggestions for growing specific plants</p>
                                    <h3>Detailed Soil Data</h3>
                                    <p>The device accurately measures soil health based on three parameters: Ph, Humidity and Temperature. A history of measurements is kept and users are able to learn what types of plants is suggested for the given soil.</p>
                                    <h3>Automated Watering System</h3>
                                    <p>The user can set a specific plant to grow inside the application. The application will send growing instructions back into the sensor which can be connected to an irrigation system that can automatically water the plants.</p>
                                    <h3>Sqlite Database</h3>
                                    <p>The application is connected to a SQLite database that contains the various plant data. The application is able to filter for specific attributes or search for specific plants</p>
                                    <h3>My Contribution</h3>
                                    <p>Specifically, I worked on the software portion of this project. I worked on the Android and IOS application completely, in coordination with my peers. I credit these contriubtions to my peers:</p>
                                    <ul>
                                        <li>Mehar Rehill - Plant Database and Research</li>
                                        <li>Kyle Granville - Embedded Systems</li>
                                        <li>Gurparkash Singh - Product Design and Structure</li>
                                    </ul>
                                </div>
                            </TypographyStylesProvider>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <TypographyStylesProvider className={classes.description}>
                                <h4>Github Link:</h4>
                                <a href="https://github.com/fchui/DIRTS">https://github.com/fchui/DIRTS</a>
                                <h4>Date Created:</h4>
                                <p>15 May, 2022</p>
                            </TypographyStylesProvider>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }