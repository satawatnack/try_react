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
      {/* {launchesData.map((launch) => (
        <ul key={launch.flight_number}>
          <li>{launch.flight_number}</li>
        </ul>
      ))} */}
      <Launches launchesData={launchesData} />
    </div>
  );
};

export default LaunchesPage;
