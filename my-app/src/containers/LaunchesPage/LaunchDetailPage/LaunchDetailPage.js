import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import LaunchService from '../../../services/LaunchService';
import { useLaunch } from '../../../contexts/LaunchContext';

import LaunchDetail from '../../../components/Launches/LaunchDetail/LaunchDetail';

const LaunchDetailPage = () => {
  let { flightNumber } = useParams();
  const { loading, setLoading } = useLaunch();
  const [launchData, setLaunchDetail] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (flightNumber) {
      setLoading(true);
      LaunchService.get(flightNumber)
        .then((res) => {
          setLoading(false);
          setLaunchDetail(res.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <LaunchDetail showLoading={loading} launchesData={launchData} />
    </div>
  );
};

export default LaunchDetailPage;