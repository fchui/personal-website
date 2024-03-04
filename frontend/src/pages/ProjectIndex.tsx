import {useState, useEffect, React} from 'react'

import { createStyles} from '@mantine/core'
import { PreviewCarousel } from '../components/index';
import { Outlet} from 'react-router-dom';
import type { Projects } from '../projects';


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
  const [merchants, setMerchants] = useState(false);

  function getMerchant() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  useEffect(() => {
    getMerchant();
  }, []);

  return (
    <>
      <PreviewCarousel/>
      <Outlet />
      <div>
        {merchants ? merchants : 'There is no merchant data available'}
      </div>
    </>
  );
};