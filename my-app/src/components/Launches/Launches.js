import React from 'react';

import LaunchCard from './LaunchCard/LaunchCard';
import classes from './Launches.css';

const Launch = (props) => (
  <div className={classes.Launches}>
    {props.launchesData.map((launch) => (
      <LaunchCard key={launch.flight_number} launch={launch} />
    ))}
  </div>
);

export default Launch;
