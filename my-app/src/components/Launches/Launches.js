import React from 'react';

const LaunchCard = React.lazy(() => import('./LaunchCard/LaunchCard'));
const FilterBar = React.lazy(() => import('./FilterBar/FilterBar'));
const Loading = React.lazy(() => import('../UI/Loading/Loading'));

const Launch = (props) => (
  <div className="flex-col justify-center">
    <div className="">
      <div className="flex justify-center m-8">
        <FilterBar />
      </div>
      <div className="flex justify-center">
        <div className="md:w-6/12 w-11/12">
          {props.launchesData.map((launch) => (
            <LaunchCard
              cardClicked={props.cardClicked}
              key={`${launch.flight_number}${launch.mission_name}`}
              launch={launch}
            />
          ))}
        </div>
      </div>
      <Loading showLoading={props.showLoading} />
    </div>
  </div>
);

export default Launch;
