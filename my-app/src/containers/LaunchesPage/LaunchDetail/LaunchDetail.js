import React from 'react';
import { useHistory } from 'react-router-dom';

const LaunchDetail = ({ match }) => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          history.push('/launches');
        }}
      >
        Go back
      </button>
      <h3>
        Welcome to the flight_number : {match.params.flightNumber} Detail Page
      </h3>
    </div>
  );
};

export default LaunchDetail;
