import { useState } from 'react'
import { Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import { MantineProvider, 
  Text,   
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

import './App.css'
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
      to={link.label}
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
        {link.label}
    </NavLink>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Group spacing={10} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}

const App = () => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderSimple links={[{ "link": "/Home", "label": "Home" },{ "link": "/Projects", "label": "Projects" }]}></HeaderSimple>
        <Text>Welcome to Mantine!</Text>
      </MantineProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
};

const Home = () => {
  return (
      <>
        <h2>Home</h2>
      </>
  );
};

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
    </>
  );
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};
/*
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive? 'bold' : 'normal',
  });
  return (
  <>
    <h1>React Router</h1>
    <nav
     style={{
      borderBottom: 'solid 1px',
      paddingBottom: '1rem',
     }}
     >
      <NavLink to="/home" style={style}>Home</NavLink>
      <NavLink to="/projects" style={style}>Projects</NavLink>
     </nav>
    <main style={{padding:'1rem 0'}}>
      <Outlet />
    </main>
  </>
  );
}
*/
export default App
