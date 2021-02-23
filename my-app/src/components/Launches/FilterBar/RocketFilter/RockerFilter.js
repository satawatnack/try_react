import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';

const RocketFilter = () => {
  const { handleRocketFilterChange } = useLaunch();

  return (
    <div>
      <label id="Rockets">| </label>
      <input
        id="Rockets"
        type="text"
        placeholder=" Search Rockets"
        onChange={handleRocketFilterChange}
      />
    </div>
  );
};

export default RocketFilter;
