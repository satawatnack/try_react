import React from "react";
// import RocketFetching from "./RocketFetching"
import RocketsCard from "./RocketsCard"
import classes from "./Rockets.css"
import RocketsFetching from "./RocketsFetching";


const Rockets = () => {
  return(
    <>
    <RocketsCard id='1' content='test'/>
    <RocketsCard id='2' content='test'/>
    <RocketsCard id='3' content='test'/>

    <RocketsFetching />
    </>
  )
};

export default Rockets;
