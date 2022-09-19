import React from 'react';
import { render } from 'react-dom';
import { App } from './views/app';

import '../index.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('../service-worker.js'));
}

const root = document.getElementById('root');

render(<App />, root);
