import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store/store';

describe('App Component', () => {
  it('renders App component correctly', () => {
    render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('tabs')).toBeInTheDocument();
    expect(screen.getByText('Create a Flash card')).toBeInTheDocument();
    expect(screen.getByText('My Flashcards')).toBeInTheDocument();
    expect(screen.getByText('Create New')).toBeInTheDocument();
  });
});
