import { Route, Routes } from 'react-router-dom';     // Import necessary components from React and react-router-dom

// Import custom components for the application
import Header from './components/navbar/Header'
import Tabs from './components/navbar/Tabs';
import CreateFlashcard from './components/flashCards/createFlashCards/CreateFlashCard';
import CardsDetails from './components/flashCards/openFlashCards/CardsDetails';
import OpenFlashcards from './components/flashCards/openFlashCards/OpenFlashCards';


// Main functional component for the application
function App() {
  return (
    // Main container with background styling
    <div className='h-auto bg-gray-300 bg-opacity-25 pb-12'>
        
        <Header />     {/* Header component at the top of the application */}
        <Tabs/>        {/* Tabs component for navigation */}
        
        {/* React Routers, Routes component for handling different routes */}
        <Routes>
            <Route path='/' element={<CreateFlashcard />} />      {/* Route for the home page, rendering the CreateFlashcard component */}
            <Route path='OpenFlashcards' element={<OpenFlashcards />} />   {/* Route for opening flashcards, rendering the OpenFlashcards component */}
            <Route path='OpenFlashcards/:type' element={<CardsDetails />} />   {/* Route for displaying details of a specific flashcard, rendering the CardsDetails component */}
        </Routes>
    </div>
  );
}

// Export the App component as the default export
export default App;
