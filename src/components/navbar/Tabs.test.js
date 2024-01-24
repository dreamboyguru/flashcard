import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Tabs';

describe('Tabs Component', () => {
  it('renders Tabs component correctly', () => {
    render(
      <Router>
        <Tabs />
      </Router>
    );

    // Check if the Tabs component is rendered
    expect(screen.getByTestId('tabs')).toBeInTheDocument();

    // Check if the heading is present
    expect(screen.getByText('Create a Flash card')).toBeInTheDocument();

    // Check if the "Create New" link is present
    const createNewLink = screen.getByText('Create New');
    expect(createNewLink).toBeInTheDocument();
    expect(createNewLink).toHaveStyle('color: red'); 

    // Simulate a click on the "Create New" link
    fireEvent.click(createNewLink);

    // Check if the active state is updated after clicking
    expect(createNewLink).toHaveStyle('color: red');

    // Check if the "My Flashcards" link is present
    const myFlashcardsLink = screen.getByText('My Flashcards');
    expect(myFlashcardsLink).toBeInTheDocument();
    expect(myFlashcardsLink).toHaveStyle('color: ');

    // Simulate a click on the "My Flashcards" link
    fireEvent.click(myFlashcardsLink);

    // Check if the active state is updated after clicking
    expect(myFlashcardsLink).toHaveStyle('color: red');
  });
});
