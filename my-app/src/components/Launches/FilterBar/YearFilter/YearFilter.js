import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';

const YearFilter = () => {
  const { handleYearFilterChange } = useLaunch();

  return (
    <div>
      <input
        type="text"
        placeholder=" Launch Year"
        onChange={handleYearFilterChange}
      />
    </div>
  );
};

export default YearFilter;
