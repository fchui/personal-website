import React from 'react'
import { Text, Container, Grid, Skeleton } from '@mantine/core'

export function ProjectDescription() {
    return (
        <>
            <Container>
                <Grid columns={3}>
                    <Grid.Col span={2}>
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