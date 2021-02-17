import React, { useState, useEffect } from 'react';
import LaunchService from '../../services/LaunchService';

const Launches = () => {
  const [launchesData, setLaunchesData] = useState([]);

  useEffect(() => {
    getLaunches();
  }, []);

  const getLaunches = () => {
    LaunchService.getAll(5, 5)
      .then((res) => {
        setLaunchesData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <h3>Launches</h3>
    </div>
  );
};

export default Launches;
