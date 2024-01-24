import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field, Form, Formik } from 'formik'; // Import necessary dependencies from Formik
import CreateGroup from './CreateGroup';

describe('CreateGroup', () => {
  it('renders the CreateGroup component with form fields', () => {
    render(
      <Formik
        initialValues={{ groupName: '', description: '' }}
        onSubmit={() => {}}
      >
        <Form> 
          <CreateGroup />
        </Form>
      </Formik>
    );

    // Check if the component is rendered
    expect(screen.getByLabelText('Create Group*')).toBeInTheDocument();

    // Check if the 'groupName' input field is rendered
    const groupNameInput = screen.getByLabelText('Create Group*');
    expect(groupNameInput).toBeInTheDocument();
    expect(groupNameInput.tagName).toBe('INPUT');

    // Check if the 'description' textarea is rendered
    const descriptionTextarea = screen.getByLabelText('Add description');
    expect(descriptionTextarea).toBeInTheDocument();
    expect(descriptionTextarea.tagName).toBe('TEXTAREA');
  });
});
