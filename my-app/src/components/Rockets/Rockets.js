import React from "react";
import RocketCard from "./RocketCard/RocketCard"
import classes from "./Rockets.css"


const Rockets = (props) => {
  return(
    <>
    <div className="flex justify-center">
      <div className="flex-col w-3/5">
        {props.rocketsData.map((rocket) => (
          <RocketCard key={rocket.rocket_id} rocket={rocket} />
        ))}
      </div>
    </div>
    </>
  )
};

export default Rockets;
