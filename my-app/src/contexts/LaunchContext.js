import React, { createContext, useCallback, useContext, useState } from 'react';

const LaunchContext = createContext();

export const LaunchProvider = (props) => {
  return (
    <LaunchContext.Provider value={{}}>{props.children}</LaunchContext.Provider>
  );
};

export const LaunchConsumer = LaunchContext.Consumer;

export const useLaunch = () => useContext(LaunchContext);

export default LaunchContext;
