// Import necessary dependencies from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';                             // Import styling for the application
import App from './App';                          // Import the main App component
import reportWebVitals from './reportWebVitals';  // Import reporting web vitals utility
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for handling client-side routing
import { Provider } from 'react-redux';           // Import Provider for Redux state management
import { store } from './redux/store/store';      // Import the Redux store

// Create a root using ReactDOM.createRoot and specify the target element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root with strict mode, Redux Provider with Redux store, and BrowserRouter
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Report web vitals for performance monitoring
reportWebVitals();
