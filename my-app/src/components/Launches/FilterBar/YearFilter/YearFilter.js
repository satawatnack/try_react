import React from 'react';

import { useFilter } from '../../../../contexts/FilterContext';
import classes from './YearFilter.module.css';

const YearFilter = () => {
  const { handleYearFilterChange } = useFilter();

  return (
    <div className={classes.YearFilter}>
      <input
        type="text"
        placeholder="Launch Year"
        onChange={handleYearFilterChange}
      />
    </div>
  );
};

export default YearFilter;
