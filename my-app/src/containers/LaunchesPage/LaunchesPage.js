import React, { useState, useEffect } from 'react';
import LaunchService from '../../services/LaunchService';

import Launches from '../../components/Launches/Launches';

const LaunchesPage = () => {
  const [launchesData, setLaunchesData] = useState([]);

  useEffect(() => {
    LaunchService.getAll(5, 0)
      .then((res) => {
        setLaunchesData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Launches launchesData={launchesData} />
    </div>
  );
};

export default LaunchesPage;
