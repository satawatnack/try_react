import React from 'react';

const Home = React.lazy(() => import('../../components/Home/Home.js'));

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
