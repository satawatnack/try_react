import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';
import classes from './RocketFilter.module.css';

const RocketFilter = () => {
  const { handleRocketFilterChange } = useLaunch();

  return (
    <div className={classes.RocketFilter}>
      <input
        type="text"
        placeholder=" Search Rockets"
        onChange={handleRocketFilterChange}
      />
    </div>
  );
};

export default RocketFilter;
