import { React, useState, useEffect } from "react";

const RocketsFetching = () => {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      // eslint-disable-next-line no-undef
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);
  return (
    <>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.rocket_name}>{rocket.description}</li>
        ))}
      </ul>
      <p>asfasdf</p>
    </>
  );
};

export default RocketsFetching;
