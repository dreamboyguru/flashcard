
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateFlashcard from './CreateFlashCard';
import { store } from '../../../redux/store/store';

import { Field, Form, Formik } from 'formik';
import CreateGroup from './CreateGroup';


// CreateFlashcard component testing
describe('CreateFlashcard Component', () => {
    it('renders CreateFlashcard component correctly', () => {
      render(
        <Provider store={store}>
          <Router>
            <CreateFlashcard />
          </Router>
        </Provider>
      );
  
      // Check if the form fields are rendered
      expect(screen.getByLabelText('Create Group*')).toBeInTheDocument();
      expect(screen.getByLabelText('Add description')).toBeInTheDocument();
      expect(screen.getByLabelText('Enter Term*')).toBeInTheDocument();
      expect(screen.getByLabelText('Enter Defination*')).toBeInTheDocument();
  
      // Simulate user input
      fireEvent.change(screen.getByLabelText('Create Group*'), { target: { value: 'Test Group' } });
      fireEvent.change(screen.getByLabelText('Add description'), { target: { value: 'Test Description' } });
      fireEvent.change(screen.getByLabelText('Enter Term*'), { target: { value: 'Test Term' } });
      fireEvent.change(screen.getByLabelText('Enter Defination*'), { target: { value: 'Test Definition' } });
  
      // Click the submit button
      fireEvent.click(screen.getByText('Create'));
  
    });
  });


// CreateGroup component testing
describe('CreateGroup Component', () => {
    it('renders CreateGroup component correctly', () => {
      // Render CreateGroup within a Formik context to mock the form
      render(
        <Formik initialValues={{ groupName: '', description: '' }} onSubmit={() => {}}>
          <Form>
            <CreateGroup />
          </Form>
        </Formik>
      );
  
      // Check if the input fields and labels are rendered
      expect(screen.getByLabelText('Create Group*')).toBeInTheDocument();
      expect(screen.getByLabelText('Add description')).toBeInTheDocument();
  
      // Check if the error message elements are present (initially hidden)
      expect(screen.queryByText('groupName is required')).toBeNull();
  
      // Enter values into the fields (you might need to adjust these based on your validation)
      const groupNameInput = screen.getByLabelText('Create Group*');
      const descriptionInput = screen.getByLabelText('Add description');
  
      fireEvent.change(groupNameInput, { target: { value: 'Sample Group' } });
      fireEvent.change(descriptionInput, { target: { value: 'Sample Description' } });
  
      // Check if the entered values are displayed in the input fields
      expect(groupNameInput.value).toBe('Sample Group');
      expect(descriptionInput.value).toBe('Sample Description');
  
    });
});