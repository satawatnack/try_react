import React from 'react';

import { useFilter } from '../../../../contexts/FilterContext';
import classes from './SuccessFilter.module.css';

const options = ['All', 'Success', 'Unsuccess'];

const SuccessFilter = (props) => {
  const { successFilter, handleSuccessFilterChange } = useFilter();

  return (
    <div className={classes.SuccessFilter}>
      <label htmlFor="select">launch success : </label>
      <select
        value={successFilter}
        onChange={handleSuccessFilterChange}
        className="form-control"
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SuccessFilter;
