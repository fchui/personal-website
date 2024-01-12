import { Routes, Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import './App.css'
import { HeaderSimple } from './components';
import { Home, ProjectIndex, Project, Root } from './pages'
import { getProjects } from './projects';
import { type Projects } from './data'

import React from 'react'

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Projects" loader={projectsLoader} element={<ProjectIndex />}>
        <Route index element={<Navigate to="1" />}></Route>
        <Route path=":projectId" loader={projectsLoader} element={<Project />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
)
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export async function projectsLoader(): Promise<Projects> {
  new Promise((r) => setTimeout(r, 500));
  return getProjects();
};

export default App
