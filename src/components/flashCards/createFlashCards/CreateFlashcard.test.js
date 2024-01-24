import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { store } from '../../../redux/store/store';
// import rootReducer from 'path/to/your/redux/rootReducer'; // Adjust the path based on your project structure
import CreateFlashcard from './CreateFlashcard';

// Create a mock store
// const store = createStore(rootReducer);

describe('CreateFlashcard Component', () => {
  it('renders CreateFlashcard component correctly', async () => {
    render(
      <Router>
        <Provider store={store}>
          <CreateFlashcard />
        </Provider>
      </Router>
    );

    // Check if the form elements are present
    expect(screen.getByLabelText('Create Group*')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Term 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Definition 1')).toBeInTheDocument();

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Create Group*'), { target: { value: 'Test Group' } });
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Term 1'), { target: { value: 'Test Term' } });
    fireEvent.change(screen.getByLabelText('Definition 1'), { target: { value: 'Test Definition' } });

    // Trigger form submission
    fireEvent.click(screen.getByText('Create'));

    // Wait for the alert to be displayed
    await waitFor(() => {
      expect(screen.getByText('A Flash card is created Successful...')).toBeInTheDocument();
    });
  });
});
