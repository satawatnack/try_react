import React, { useState, useEffect, useLayoutEffect, createRef } from 'react';

import LaunchService from '../../services/LaunchService';
import { useLaunch } from '../../contexts/LaunchContext';
import classes from './LaunchesPage.module.css';

const Launches = React.lazy(() => import('../../components/Launches/Launches'));

const LaunchesPage = () => {
  const launchPerPage = 10;
  const myRef = createRef();
  let mounted = false;

  const {
    launchesData,
    setLaunchesData,
    launchesFilter,
    loading,
    offset,
    setOffset,
    setLoading,
    setLaunchesFilter,
  } = useLaunch();

  useEffect(() => {
    mounted = true;
    if (offset === launchesData.length) getLaunch();

    return function cleanup() {
      mounted = false;
    };
  }, [offset]);

  function getLaunch() {
    setLoading(true);
    LaunchService.getAll(launchPerPage, offset)
      .then((res) => {
        if (mounted) {
          setLoading(false);
          if (launchesData.length > 0) {
            let arr = [...launchesData, ...res.data];
            setLaunchesData(arr);
            setLaunchesFilter(arr);
          } else {
            setLaunchesData(res.data);
            setLaunchesFilter(res.data);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const checkScroll = (e) => {
    let bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;

    if (bottom && !loading && offset < 110) {
      setLoading(true);
      let newOffSet = offset + launchPerPage;
      setOffset(newOffSet);
    }
  };

  return (
    <div onScroll={checkScroll} ref={myRef} className={classes.LaunchesPage}>
      <Launches showLoading={loading} launchesData={launchesFilter} />
    </div>
  );
};

export default LaunchesPage;
