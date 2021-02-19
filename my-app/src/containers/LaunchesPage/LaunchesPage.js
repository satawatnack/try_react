import React, { useState, useEffect } from 'react';
import LaunchService from '../../services/LaunchService';

import Launches from '../../components/Launches/Launches';
import { useFilter } from '../../contexts/FilterContext';

const LaunchesPage = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [launchesFilter, setLaunchesFilter] = useState([]);
  const { successFilter, rocketFilter, yearFilter } = useFilter();

  useEffect(() => {
    LaunchService.getAll(30, 0)
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
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      case 'Success':
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              launch.launch_success &&
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      case 'Unsuccess':
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              !launch.launch_success &&
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      default:
        setLaunchesFilter(launchesData);
    }
  }, [successFilter, rocketFilter, yearFilter]);

  return (
    <div>
      <Launches launchesData={launchesFilter} />
    </div>
  );
};

export default LaunchesPage;
