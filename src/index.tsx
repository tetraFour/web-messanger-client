import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';

import App from './App';

// internationalization config
import 'utils/i18next.config';

// global styles
import 'antd/dist/antd.css';
import 'assets/styles/index.scss';

// MOBX conf
enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});
configure({ enforceActions: 'observed' });

ReactDOM.render(<App />, document.getElementById('root'));
