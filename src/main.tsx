import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/Auth0-provider';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);