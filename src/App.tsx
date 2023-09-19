import { Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import './App.css'
import { HeaderSimple } from './components';
import { Home, Projects, Projects2 } from './pages'
import React from 'react'


const App = () => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HeaderSimple links={[{ "link": "/Home", "label": "Home" },{ "link": "/Projects/1", "label": "Projects" }]}></HeaderSimple>
      </MantineProvider>
      <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Projects/1" element={<Projects />} />
          <Route path="Projects/2" element={<Projects2 />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App
