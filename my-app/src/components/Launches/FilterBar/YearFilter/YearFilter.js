import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';
import classes from './YearFilter.module.css';

const YearFilter = () => {
  const { handleYearFilterChange } = useLaunch();

  return (
    <div className={classes.YearFilter}>
      <input
        type="text"
        placeholder=" Launch Year"
        onChange={handleYearFilterChange}
      />
    </div>
  );
};

export default YearFilter;
