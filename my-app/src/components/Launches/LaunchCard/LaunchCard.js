import React from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import classes from './LaunchCard.module.css';

const LaunchCard = (props) => {
  let { url } = useRouteMatch();
  return (
    <div
      className={`${classes.LaunchCard} bg-gradient-to-r from-gray-800 to-gray-600`}
    >
      <Link
        to={`${url}/${props.launch?.flight_number ?? ''}`}
        className="navbar-item"
      >
        <div className="grid grid-cols-2">
          <div>
            <h3>No : {props.launch?.flight_number ?? ''}</h3>
            <h5>Mission : {props.launch?.mission_name ?? ''}</h5>
            <ul>
              <li>Rocket : {props.launch?.rocket?.rocket_name ?? ''}</li>
              <li>
                Success:{' '}
                <span
                  className={`${
                    props.launch?.launch_success
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {props.launch?.launch_success?.toString() ?? ''}
                </span>
              </li>
              <li>Year : {props.launch?.launch_year ?? ''}</li>
            </ul>
          </div>
          <div className="sm:ml-20 ml-5 md:w-36 w-32">
            <img width="160" src={props.launch?.links?.mission_patch} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LaunchCard;
