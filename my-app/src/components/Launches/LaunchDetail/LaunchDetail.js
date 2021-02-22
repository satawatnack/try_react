import React from 'react';
import Loading from '../../UI/Loading/Loading';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

const LaunchDetail = (props) => {
  '/rockets/falcon9';
  let { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div>
      <button
        className="button icon-left"
        onClick={() => history.push('/launches')}
      >
        Back
      </button>
      <h3>{props.launchesData?.flight_number}</h3>
      <h3>{props.launchesData?.mission_name}</h3>
      <Link
        to={`/rockets/${
          props.launchesData?.rocket?.rocket_name
            ?.split(' ')
            .join('')
            .toLowerCase() ?? ''
        }`}
        className="navbar-item"
      >
        <h3>{props.launchesData?.rocket?.rocket_name}</h3>
      </Link>
      <Loading showLoading={props.showLoading} />
    </div>
  );
};

export default LaunchDetail;
