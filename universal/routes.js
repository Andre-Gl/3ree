import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HubApp from './containers/HubApp';
import HubHome from './containers/HubHome';
import HubSearch from './containers/HubSearch';

export default (
  <Route path='/' component={HubApp}>
    <IndexRoute component={HubHome} />
    <Route path='search/:make/:model' component={HubSearch} />
  </Route>
);