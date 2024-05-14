// Import necessary dependencies from React and React Router
import React, { useState } from 'react'
import {  Link } from 'react-router-dom' 


// Functional component for rendering navigation tabs
function Tabs() {
    const [active, setactive] = useState('newCard')     // State to manage the active tab

    return (
      <div className='xl:w-2/3 xl:ml-60 lg:w3/4 lg:ml-24 md:w-4/5 md:ml-20 sm:w-full ml-5 pt-14 max-md:pt-7' data-testid='tabs'>

        {/* Heading for the tab section */}
        <h1 className='text-2xl p-5' data-testid='CreateFlashCard'> <b>Create a Flash card </b></h1>

        {/* Tab link for creating a new flashcard */}
        <Link to='/' 
            onClick={()=> setactive('newCard')}
            className='text-lg p-5 hover:text-slate-300' 
            style={active === 'newCard' ? {color:"red"} : {color:""}}> 
            Create New
        </Link>

        {/* Tab link for displaying user's flashcards */}
        <Link to='/OpenFlashcards' 
            onClick={()=> setactive('myCard')}
            className='text-lg p-5 hover:text-slate-300' 
            style={active === 'myCard' ? {color:"red"} : {color:""}}> 
            My Flashcards
        </Link>

        {/* Horizontal line to separate tabs */}
        <hr className='h-1 mb-5 bg-slate-400'/>
        
      </div>
    )
}

// Export the Tabs component as the default export
export default Tabs
