import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/HomePage/HomePage';
import Rockets from './containers/RocketsPage/RocketsPage';
import RocketDetail from './containers/RocketsPage/RocketDetail/RocketDetail';
import Launches from './containers/LaunchesPage/LaunchesPage';
import LaunchDetailPage from './containers/LaunchesPage/LaunchDetailPage/LaunchDetailPage';

import { LaunchProvider } from './contexts/LaunchContext';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rockets" exact component={Rockets} />

          <LaunchProvider>
            <Route path="/launches" exact component={Launches} />
            <Route
              exact
              path="/launches/:flightNumber"
              component={LaunchDetailPage}
            />
          </LaunchProvider>

          <Route exact path="/rockets/:rocket_id" component={RocketDetail} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
