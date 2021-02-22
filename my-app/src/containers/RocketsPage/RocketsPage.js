import React, { useState, useEffect } from 'react';
import RocketsService from '../../services/RocketsService';
import Rockets from '../../components/Rockets/Rockets';

const RocketsPage = () => {
  const [rocketsData, setRocketsData] = useState([]);

  useEffect(() => {
    let mounted = true;
    RocketsService.getAll(5, 0)
      .then((res) => {
        if (mounted) setRocketsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Rockets rocketsData={rocketsData} />
    </div>
  );
};

export default RocketsPage;
