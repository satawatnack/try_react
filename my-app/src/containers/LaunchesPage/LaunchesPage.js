import React, { useState, useEffect } from 'react';
import LaunchService from '../../services/LaunchService';

import Launches from '../../components/Launches/Launches';
import { useFilter } from '../../contexts/FilterContext';

const LaunchesPage = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [launchesFilter, setLaunchesFilter] = useState([]);
  const { successFilter } = useFilter();

  useEffect(() => {
    LaunchService.getAll(5, 0)
      .then((res) => {
        setLaunchesData(res.data);
        setLaunchesFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    switch (successFilter) {
      case 'All':
        setLaunchesFilter(launchesData);
        break;
      case 'Success':
        setLaunchesFilter(
          launchesData.filter((launch) => launch.launch_success === true)
        );
        break;
      case 'Unsuccess':
        setLaunchesFilter(
          launchesData.filter((launch) => !launch.launch_success)
        );
        break;
      default:
        setLaunchesFilter(launchesData);
    }
  }, [successFilter]);

  return (
    <div>
      <Launches launchesData={launchesFilter} />
    </div>
  );
};

export default LaunchesPage;
