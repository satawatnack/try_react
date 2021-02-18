import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import Home from './containers/HomePage/HomePage';
import Rockets from './containers/RocketsPage/RocketsPage';
import Launches from './containers/LaunchesPage/LaunchesPage';

import { FilterProvider } from './contexts/FilterContext';

function App() {
  return (
    <FilterProvider>
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rockets" component={Rockets} />
            <Route path="/launches" component={Launches} />
          </Switch>
        </Layout>
      </div>
    </FilterProvider>
  );
}

export default App;
