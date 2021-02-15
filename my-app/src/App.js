import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './containers/Home/Home';
import Rockets from './containers/Rockets/Rockets';
import Launches from './containers/Launches/Launches';

function App() {
  return (
    <div>
      <Layout>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rockets">Rockets</Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
        </ul>

        <hr />

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
