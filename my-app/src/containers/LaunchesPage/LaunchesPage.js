import React, { useState, useEffect, useLayoutEffect, createRef } from 'react';

import LaunchService from '../../services/LaunchService';
import Launches from '../../components/Launches/Launches';
import { useLaunch } from '../../contexts/LaunchContext';
import classes from './LaunchesPage.module.css';

const LaunchesPage = () => {
  const launchPerPage = 20;
  const myRef = createRef();

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
    if (offset === launchesData.length) getLaunch();
  }, [offset]);

  function getLaunch() {
    setLoading(true);
    console.log('getLaunch');
    console.log(`now offset : ${offset}`);
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
        setLoading(false);
      });
  }

  const checkScroll = (e) => {
    let bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;

    // console.log(e.target.scrollTop);

    if (bottom && !loading && offset < 110) {
      setLoading(true);
      console.log('bottom');
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
