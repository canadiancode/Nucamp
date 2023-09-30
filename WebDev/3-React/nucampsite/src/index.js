import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// added in imports from NuCamp
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';

// React Redux
import { Provider } from 'react-redux';
import { store } from './app/store';

// React Router
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);