import React from 'react'
import { createStyles, Text, Container, Grid, Skeleton, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    grid: {
        borderRight: `${rem(2)} solid ${theme.colors.gray[2]}`,
    }
  }));

export function ProjectDescription() {
    const { classes, theme } = useStyles();

    return (
        <>
            <Container>
                <Grid columns={3}>
                    <Grid.Col className={classes.grid} span={2}>
                        <Text>Typing in Skeleton</Text>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Skeleton height={300} radius="md" animate={false}/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
  }