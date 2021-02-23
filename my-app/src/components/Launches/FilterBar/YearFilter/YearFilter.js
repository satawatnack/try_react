import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';

const YearFilter = () => {
  const { handleYearFilterChange } = useLaunch();

  return (
    <div>
      <label id="Year">| </label>
      <input
        type="text"
        id="Year"
        placeholder=" Launch Year"
        onChange={handleYearFilterChange}
      />
    </div>
  );
};

export default YearFilter;
