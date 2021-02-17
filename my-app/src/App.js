import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/HomePage/HomePage';
import Rockets from './containers/RocketsPage/RocketsPage';
import Launches from './containers/LaunchesPage/LaunchesPage';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/launches" component={Launches} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
