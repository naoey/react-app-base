import 'babel-polyfill';
import 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';

const App = () => <h1>Hello World!</h1>;

ReactDOM.render(<App />, document.getElementById('react-root'));
