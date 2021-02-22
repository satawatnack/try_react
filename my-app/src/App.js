import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/HomePage/HomePage';

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
      <Layout>
        <React.Suspense fallback={<span>Loading...</span>}>
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
    </div>
  );
}

export default App;
