import React from 'react';

const RocketCard = React.lazy(() => import('./RocketCard/RocketCard'));

const Rockets = (props) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col">
          {props.rocketsData.map((rocket) => (
            <RocketCard key={rocket.rocket_id} rocket={rocket} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Rockets;
