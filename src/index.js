import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App';
import 'antd/dist/antd.css';
import { ServiceProvider } from './Components/ContextMetrika'

ReactDOM.render(
  <React.StrictMode>
    <ServiceProvider>
    <App />
    </ServiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

