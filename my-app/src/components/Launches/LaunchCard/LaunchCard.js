import React from 'react';
import classes from './LaunchCard.css';

const LaunchCard = (props) => (
  <div className={classes.LaunchCard}>
    <div className={classes.container}>
      <h3>No : {props.launch.flight_number}</h3>
      <h5>Mission : {props.launch.mission_name}</h5>
      <ul>
        <li>rocket name : {props.launch.rocket.rocket_name}</li>
      </ul>
    </div>
  </div>
);

export default LaunchCard;
