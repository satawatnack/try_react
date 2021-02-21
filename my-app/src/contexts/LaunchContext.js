import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

const LaunchContext = createContext();

export const LaunchProvider = (props) => {
  const [launchesData, setLaunchesData] = useState([]);
  const [launchesFilter, setLaunchesFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

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

  useEffect(() => {
    filterLaunches();
  }, [successFilter, rocketFilter, yearFilter]);

  function filterLaunches() {
    switch (successFilter) {
      case 'All':
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      case 'Success':
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              launch.launch_success &&
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      case 'Unsuccess':
        setLaunchesFilter(
          launchesData.filter(
            (launch) =>
              !launch.launch_success &&
              launch.rocket.rocket_name
                .toLowerCase()
                .includes(rocketFilter.toLowerCase()) &&
              launch.launch_year
                .toLowerCase()
                .includes(yearFilter.toLowerCase())
          )
        );
        break;
      default:
        setLaunchesFilter(launchesData);
    }
  }

  return (
    <LaunchContext.Provider
      value={{
        successFilter,
        handleSuccessFilterChange,
        rocketFilter,
        handleRocketFilterChange,
        yearFilter,
        handleYearFilterChange,
        launchesData,
        launchesFilter,
        loading,
        setLoading,
        offset,
        setOffset,
        setLaunchesData,
        setLaunchesFilter,
      }}
    >
      {props.children}
    </LaunchContext.Provider>
  );
};

export const LaunchConsumer = LaunchContext.Consumer;

export const useLaunch = () => useContext(LaunchContext);

export default LaunchContext;
