// Import necessary dependencies for testing
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import App from './App';

// Test suite for the main application
describe('App', () => {
  // Test case for rendering the application
  it('renders the application without crashing', () => {
    // Render the application with the necessary providers and components
    render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
  });
});

// You can add more test cases to cover specific functionality if needed
