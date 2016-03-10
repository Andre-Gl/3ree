import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route } from 'react-router';

import routes from '../universal/routes';
import store from '../universal/store';
import * as actions from '../universal/actions/index';

import Root from '../universal/containers/root';

import '../style/pure.css';
import '../style/main.styl';
import '../style/spinner.styl';


ReactDOM.render(
  <Root store={store} routing={routes} />,
  document.getElementById('app')
);
