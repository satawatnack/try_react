import React from 'react';

const LaunchDetail = ({ match }) => {
  return (
    <h3>
      Welcome to the flight_number : {match.params.flightNumber} Detail Page
    </h3>
  );
};

export default LaunchDetail;
