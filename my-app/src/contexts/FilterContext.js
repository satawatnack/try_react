import React, { createContext, useCallback, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [successFilter, setSuccessFilter] = useState('All');

  const handleSuccessFilterChange = useCallback((e) => {
    setSuccessFilter(e.target.value);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        successFilter,
        handleSuccessFilterChange,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export const FilterConsumer = FilterContext.Consumer;

export const useFilter = () => useContext(FilterContext);

export default FilterContext;
