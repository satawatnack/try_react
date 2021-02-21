import React from 'react';
import classes from './LaunchCard.module.css';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

const LaunchCard = (props) => {
  let { url } = useRouteMatch();
  return (
    <div
      className={`${classes.LaunchCard} bg-gradient-to-r from-green-400 to-blue-500`}
    >
      <Link
        to={`${url}/${props.launch?.flight_number ?? ''}`}
        className="navbar-item"
      >
        <div className={classes.container}>
          <h3>No : {props.launch?.flight_number ?? ''}</h3>
          <h5>Mission : {props.launch?.mission_name ?? ''}</h5>
          <ul>
            <li>rocket name : {props.launch?.rocket?.rocket_name ?? ''}</li>
            <li>
              launch success:{' '}
              <span
                className={`${
                  props.launch?.launch_success ? classes.green : classes.red
                }`}
              >
                {props.launch?.launch_success?.toString() ?? ''}
              </span>
            </li>
            <li>launch year : {props.launch?.launch_year ?? ''}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default LaunchCard;
