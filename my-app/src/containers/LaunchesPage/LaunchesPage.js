import React, { useState, useEffect, useCallback } from 'react';
import LaunchService from '../../services/LaunchService';

import Launches from '../../components/Launches/Launches';
import { useFilter } from '../../contexts/FilterContext';
import classes from './LaunchesPage.css';

const LaunchesPage = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [launchesFilter, setLaunchesFilter] = useState([]);
  const [offset, setOffset] = useState(0);
  const { successFilter, rocketFilter, yearFilter } = useFilter();
  const [loading, setLoading] = useState(false);

  const launchPerPage = 20;

  useEffect(() => {
    getLaunches();
  }, [offset]);

  useEffect(() => {
    filterLaunches();
  }, [successFilter, rocketFilter, yearFilter]);

  function getLaunches() {
    setLoading(true);
    LaunchService.getAll(launchPerPage, offset)
      .then((res) => {
        setLoading(false);
        if (launchesData.length > 0) {
          let arr = [...launchesData, ...res.data];

          console.log(arr);
          setLaunchesData(arr);
          setLaunchesFilter(arr);
        } else {
          setLaunchesData(res.data);
          setLaunchesFilter(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function filterLaunches() {
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
  }

  const checkScroll = async (e) => {
    let bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
    if (bottom && !loading && offset < 110) {
      console.log('bottom');
      let newOffset = offset + 20;
      setOffset(newOffset);
    }
  };

  return (
    <div onScroll={checkScroll} className={classes.LaunchesPage}>
      <Launches showLoading={loading} launchesData={launchesFilter} />
    </div>
  );
};

export default LaunchesPage;
