import { createStyles, Container, Header, Group, Burger, rem } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react'
import React from 'react'

const useStyles = createStyles((theme) => ({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
  
    links: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  
    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        padding: `${rem(8)} ${rem(12)}`,
      },
    },
  }));

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}
  
export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
  
    const items = links.map((link) => (
      <NavLink
        to={link.link}
        key={link.label}
        className={({ isActive }) => isActive ? classes.linkActive : classes.link }    
        onClick={(event) => {
          setActive(link.link);
        }}
      >
          {link.label}
      </NavLink>
    ));
  
    return (
      <Header height={60} mb={0}>
        <Container className={classes.header}>
          <Group spacing={16} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Container>
      </Header>
    );
  }