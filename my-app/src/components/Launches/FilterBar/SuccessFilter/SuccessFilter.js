import React from 'react';

import { useLaunch } from '../../../../contexts/LaunchContext';

const options = ['All', 'Success', 'Unsuccess'];

const SuccessFilter = (props) => {
  const { successFilter, handleSuccessFilterChange } = useLaunch();

  return (
    <div className="">
      <label htmlFor="select">| launch success : </label>
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
      </select>{' '}
      |
    </div>
  );
};

export default SuccessFilter;
