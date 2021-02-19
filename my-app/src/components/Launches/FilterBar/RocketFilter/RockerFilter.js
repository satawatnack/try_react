import React from 'react';

import { useFilter } from '../../../../contexts/FilterContext';
import classes from './RocketFilter.css';

const RocketFilter = () => {
  const { handleRocketFilterChange } = useFilter();

  return (
    <div className={classes.RocketFilter}>
      <input
        type="text"
        placeholder="Search Rockets"
        onChange={handleRocketFilterChange}
      />
    </div>
  );
};

export default RocketFilter;
