import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/TextBlock';

const lines = [
  "Just some example text."
];

ReactDOM.render(
  <TextBlock lines={lines} />,
  document.getElementById('app')
);
