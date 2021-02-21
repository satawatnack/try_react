import React from 'react';

import LaunchCard from './LaunchCard/LaunchCard';
import FilterBar from './FilterBar/FilterBar';
import Loading from '../UI/Loading/Loading';
import classes from './Launches.module.css';

const Launch = (props) => (
  <div className={classes.container}>
    <div className={classes.row}>
      <div className={classes.column}>
        <div className={classes.Launches}>
          {props.launchesData.map((launch) => (
            <LaunchCard
              cardClicked={props.cardClicked}
              key={launch.flight_number}
              launch={launch}
            />
          ))}
        </div>
        <Loading showLoading={props.showLoading} />
      </div>
      <div className={classes.column2}>
        <FilterBar />
      </div>
    </div>
  </div>
);

export default Launch;
