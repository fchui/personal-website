import React from 'react'
import { HeroHeader, AboutMe, MyValues } from '../components/index';
import { HeaderSimple } from '../components';
import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const Root = () => {
    return (
        <>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <HeaderSimple links={[{ "link": "/Home", "label": "Home" },{ "link": "/Projects", "label": "Projects" }]}></HeaderSimple>
            </MantineProvider>
            <Outlet />
        </>
    );
  };