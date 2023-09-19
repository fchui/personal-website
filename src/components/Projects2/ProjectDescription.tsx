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

export function ProjectDescription2() {
    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <Title className={classes.title} align={'left'} order={2}>Helpful Assistant For Gardeners</Title>
                            <Text className={classes.description} align={'left'}>Capstone Presentation: <a href="https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s">https://www.youtube.com/watch?v=GHnZltRC3K4&t=215s</a></Text>
                            <Text className={classes.description} align={'left'}><br />DIRTS is a sensor package that sends soil data directly to your mobile phone via Bluetooth. The application processes soil data and is able to give suggestions for growing specific plants</Text>
                            <Title className={classes.title} align={'left'} order={3}>Detailed Soil Data</Title>
                            <Text className={classes.description} align={'left'}>The device accurately measures soil health based on three parameters: Ph, Humidity and Temperature. A history of measurements is kept and users are able to learn what types of plants is suggested for the given soil.</Text>
                            <Title className={classes.title} align={'left'} order={3}>Automated Watering System</Title>
                            <Text className={classes.description} align={'left'}>The user can set a specific plant to grow inside the application. The application will send growing instructions back into the sensor which can be connected to an irrigation system that can automatically water the plants.</Text>
                            <Title className={classes.title} align={'left'} order={3}>Sqlite Database</Title>
                            <Text className={classes.description}align={'left'}>The application is connected to a SQLite database that contains the various plant data. The application is able to filter for specific attributes or search for specific plants</Text>
                            <Title className={classes.title} align={'left'} order={3}>My Contribution</Title>
                            <Text className={classes.description} align={'left'}>Specifically, I worked on the software portion of this project. I worked on the Android and IOS application completely, in coordination with my peers. I credit these contriubtions to my peers:</Text>
                            <Text className={classes.description} align={'left'}>
                            <ul>
                                <li>Mehar Rehill - Plant Database and Research</li>
                                <li>Kyle Granville - Embedded Systems</li>
                                <li>Gurparkash Singh - Product Design and Structure</li>
                            </ul>
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <Title className={classes.title} align={'left'} order={4}>Github Link:</Title>
                            <Text className={classes.description} align={'left'}><a href="https://github.com/fchui/DIRTS">https://github.com/fchui/DIRTS</a></Text>
                            <Title className={classes.title} align={'left'} order={4}>Date Created:</Title>
                            <Text className={classes.description} align={'left'}>15 May, 2022</Text>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }