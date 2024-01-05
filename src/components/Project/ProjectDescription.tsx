import React from 'react'
import { createStyles, Title, Text, Container, Grid, Skeleton, rem, TypographyStylesProvider } from '@mantine/core'
import DOMPurify from 'isomorphic-dompurify'
import { useLoaderData, useParams } from 'react-router-dom';
import type { Projects } from '../../projects';

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
    let projects = useLoaderData() as Projects;
    let { projectId } = useParams();

    if (!projectId)
    {
        throw new Error("expected projectId")
    }

    const sanitizedData = (id: string) => (
        {
        __html: DOMPurify.sanitize(projects[id].data)
    })

    const sanitizedDataInfo = (id: string) => ({
        __html: DOMPurify.sanitize(projects[id].dataInfo)
    })

    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <TypographyStylesProvider className={classes.description}>
                                <div dangerouslySetInnerHTML={sanitizedData(projectId)} />
                            </TypographyStylesProvider>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <TypographyStylesProvider className={classes.description}>
                                <div dangerouslySetInnerHTML={sanitizedDataInfo(projectId)} />
                            </TypographyStylesProvider>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }