import React, { useState, useEffect } from 'react'

import { createStyles} from '@mantine/core'
import { PreviewCarousel } from '../components/index';
import { Outlet} from 'react-router-dom';
import type { Projects } from '../projects';

export interface merchants {
  [key: string]: { name: string, email: string };
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
  },

  title: {
    paddingBottom: `calc(${theme.spacing.xl} * 1)`,
  }
}));

export const ProjectIndex = () => {
  const { classes, theme } = useStyles();
  const [merchants, setMerchants] = useState("");
  const [completed, setCompleted] = useState({});

  function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }
  
  function seperateMerchants() {
    if (merchants == "")
    {
      return
    }
    const parsed = JSON.parse(merchants)
    if (parsed.length > 0)
    {
      for (var merchant of parsed)
      {
        completed[merchant.id] = {name: merchant.name, email: merchant.email}
      }
      console.log(JSON.stringify(completed, null, 4))
      setCompleted(completed)
    }
  }

  useEffect(() => {
    getMerchant();
  }, []);

  useEffect(() => {
    seperateMerchants();
  }, [merchants]);

  return (
    <>
      <PreviewCarousel/>
      <Outlet />
      <div>
        {completed ? JSON.stringify(completed, null, 4) : 'There is no merchant data available'}
      </div>
    </>
  );
};