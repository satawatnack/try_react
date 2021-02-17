import React from "react";
// import RocketFetching from "./RocketFetching"
import RocketsCard from "./RocketsCard"
import classes from "./Rockets.css"
import RocketsFetching from "./RocketsFetching";


const Rockets = () => {
  return(
    <>
    <div className={classes.trayCardCover}>
      <div className={classes.trayCard}>
        {/* <RocketsCard id='1' content='test'/>
        <RocketsCard id='2' content='test'/>
        <RocketsCard id='3' content='test'/>
        <RocketsCard id='4' content='test'/> */}        
        {Array.from(Array(50).keys()).map(i => {
          return (
            <RocketsCard id={i} key={i} content='test'/>
          )
        })}
      </div>
    </div>
    <RocketsFetching />
    </>
  )
};

export default Rockets;
