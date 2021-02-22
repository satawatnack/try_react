import React from 'react';

import SuccessFilter from './SuccessFilter/SuccessFilter';
import RocketFilter from './RocketFilter/RockerFilter';
import YearFilter from './YearFilter/YearFilter';

const FilterBar = () => (
  <div className="flex gap-2 flex-col sm:flex-row">
    <RocketFilter />
    <YearFilter />
    <SuccessFilter />
  </div>
);

export default FilterBar;
