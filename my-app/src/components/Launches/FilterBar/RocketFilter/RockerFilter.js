import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';

const RocketFilter = () => {
  const { handleRocketFilterChange } = useLaunch();

  return (
    <div>
      <input
        type="text"
        placeholder=" Search Rockets"
        onChange={handleRocketFilterChange}
      />
    </div>
  );
};

export default RocketFilter;
