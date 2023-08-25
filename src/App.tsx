import { useState } from 'react'
import { Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import { MantineProvider, Text} from '@mantine/core'

import './App.css'
import React from 'react'

const App = () => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text>Welcome to Mantine!</Text>
      </MantineProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
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

export default App
