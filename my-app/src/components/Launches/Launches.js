import React from 'react';

import LaunchCard from './LaunchCard/LaunchCard';
import FilterBar from './FilterBar/FilterBar';
import Loading from '../UI/Loading/Loading';

const Launch = (props) => (
  <div className="flex-col justify-center">
    <div className="">
      <div className="flex justify-center m-4 mb-8">
        <FilterBar />
      </div>
      <div className="flex justify-center">
        <div className="md:w-6/12 w-11/12">
          {props.launchesData.map((launch) => (
            <LaunchCard
              cardClicked={props.cardClicked}
              key={launch.flight_number}
              launch={launch}
            />
          ))}
        </div>
        <Loading showLoading={props.showLoading} />
      </div>
    </div>
  </div>
);

export default Launch;
