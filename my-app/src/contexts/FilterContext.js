import React, { createContext, useCallback, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [successFilter, setSuccessFilter] = useState('All');
  const [rocketFilter, setRocketFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const handleSuccessFilterChange = useCallback((e) => {
    setSuccessFilter(e.target.value);
  }, []);

  const handleRocketFilterChange = useCallback((e) => {
    setRocketFilter(e.target.value);
  }, []);

  const handleYearFilterChange = useCallback((e) => {
    setYearFilter(e.target.value);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        successFilter,
        handleSuccessFilterChange,
        rocketFilter,
        handleRocketFilterChange,
        yearFilter,
        handleYearFilterChange,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export const FilterConsumer = FilterContext.Consumer;

export const useFilter = () => useContext(FilterContext);

export default FilterContext;
