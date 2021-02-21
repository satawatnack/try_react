import React, { useState, useEffect } from 'react';
import RocketsService from '../../services/RocketsService';
import Rockets from '../../components/Rockets/Rockets';

const RocketsPage = () => {
  const [rocketsData, setRocketsData] = useState([]);

  useEffect(() => {
    RocketsService.getAll(5, 0)
      .then((res) => {
        setRocketsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Rockets rocketsData={rocketsData} />
    </div>
  );
};

export default RocketsPage;
