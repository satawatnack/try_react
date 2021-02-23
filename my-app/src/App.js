import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import classes from './App.module.css';

const Home = React.lazy(() => import('./containers/HomePage/HomePage'));

const Rockets = React.lazy(() =>
  import('./containers/RocketsPage/RocketsPage')
);

const RocketDetail = React.lazy(() =>
  import('./containers/RocketsPage/RocketDetail/RocketDetail')
);

const Launches = React.lazy(() =>
  import('./containers/LaunchesPage/LaunchesPage')
);

const LaunchDetailPage = React.lazy(() =>
  import('./containers/LaunchesPage/LaunchDetailPage/LaunchDetailPage')
);

import { LaunchProvider } from './contexts/LaunchContext';

function App() {
  return (
    <div>
      <React.Suspense
        fallback={
          <div className={`${classes.fullPageLoader} ${classes.Logo}`}>
            <img
              width="50"
              src={process.env.PUBLIC_URL + '/astronaut.png'}
              alt="astronaut"
            />
          </div>
        }
      >
        <Layout>
          <React.Suspense
            fallback={
              <div className={`${classes.fullPageLoader} ${classes.Logo}`}>
                <img
                  width="50"
                  src={process.env.PUBLIC_URL + '/astronaut.png'}
                  alt="astronaut2"
                />
              </div>
            }
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rockets" exact component={Rockets} />
              <Route path="/rockets/:rocket_id" component={RocketDetail} />

              <LaunchProvider>
                <Route path="/launches" exact component={Launches} />
                <Route
                  path="/launches/:flightNumber"
                  component={LaunchDetailPage}
                />
              </LaunchProvider>
            </Switch>
          </React.Suspense>
        </Layout>
      </React.Suspense>
    </div>
  );
}

export default App;
