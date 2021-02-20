import React from 'react';

import SuccessFilter from './SuccessFilter/SuccessFilter';
import RocketFilter from './RocketFilter/RockerFilter';
import YearFilter from './YearFilter/YearFilter';
import classes from './FilterBar.module.css';

const FilterBar = (props) => (
  <div>
    <RocketFilter />
    <YearFilter />
    <SuccessFilter />
  </div>
);

export default FilterBar;
