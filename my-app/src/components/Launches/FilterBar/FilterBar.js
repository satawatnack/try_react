import React from 'react';

const SuccessFilter = React.lazy(() => import('./SuccessFilter/SuccessFilter'));
const RocketFilter = React.lazy(() => import('./RocketFilter/RockerFilter'));
const YearFilter = React.lazy(() => import('./YearFilter/YearFilter'));

const FilterBar = () => (
  <div className="flex gap-2 flex-col sm:flex-row">
    <RocketFilter />
    <YearFilter />
    <SuccessFilter />
  </div>
);

export default FilterBar;
