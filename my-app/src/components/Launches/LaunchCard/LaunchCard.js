import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './LaunchCard.module.css';

const LaunchCard = (props) => {
  let { url } = useRouteMatch();
  const launch_success = props.launch?.launch_success;

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
            <p>No : {props.launch?.flight_number ?? ''}</p>
            <p>Mission : {props.launch?.mission_name ?? ''}</p>
            <ul>
              <li>Rocket : {props.launch?.rocket?.rocket_name ?? ''}</li>
              <li>
                Success:{' '}
                {launch_success ? (
                  <span className="text-green-400">success</span>
                ) : launch_success === null ? (
                  ''
                ) : (
                  <span className="text-red-400">unsuccess</span>
                )}
              </li>
              <li>Year : {props.launch?.launch_year ?? ''}</li>
            </ul>
          </div>
          <div className="sm:ml-20 ml-5 md:w-36 w-32">
            <img
              width="160"
              height="160"
              alt={props.launch?.links?.mission_patch_small ?? 'defaultImg'}
              src={props.launch?.links?.mission_patch_small}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LaunchCard;
