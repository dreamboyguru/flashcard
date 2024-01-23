// Import necessary dependencies from React and React Router
import React from 'react'
import { Link } from 'react-router-dom'

// Import useDispatch and useSelector to interact with Redux store
import {  useDispatch, useSelector } from 'react-redux'

 // import HiArrowNarrowRight and RxCross2 icon from react-icons
import { HiArrowNarrowRight } from "react-icons/hi";
import { RxCross2 } from 'react-icons/rx'; 

// Import Redux action to remove flashcards
import { removeflashCard } from '../../../redux/slices/flashCardSlice';


// Functional component for displaying open flashcards
function OpenFlashcards() {
  const flashCards = useSelector(state => state.flashCards)      // Retrieve flashcards from the Redux store using useSelector
  const dispatch = useDispatch()                                 // Get the dispatch function from Redux
  
  return (
    // Check if there are flashcards to display
    flashCards.length > 0 ?
    <div className='xl:w-2/3 xl:ml-60 lg:w3/4 lg:ml-24 md:w-4/5 md:ml-20 sm:w-full mb-5 pl-2'>
      <div className='flex flex-wrap justify-items-stretch max-sm:flex-col max-md:flex-col'>

      {/* Map through each flashcard and display it */}
      {flashCards.map((flashCard, index) => (
        <div key={index} className='flex w-[33%] px-2 max-sm:w-full max-md:w-full'>
          <div className='p-5 my-4 bg-white  rounded-md shadow-lg py-3 w-full'>
            <div className='grid md:grid-cols-12 font-medium'>
              <div className='col-span-12'>
                <div className='flex flex-row w-full'>
                  
                  {/* Display group name */}
                  <div className='text-black font-bold text-l w-full'>
                    {flashCard.text.groupName}
                  </div>
                  <div className='text-black font-bold text-l hover:font-extrabold'>
                    {/* Delete button with the RxCross2 icon */}
                    <RxCross2 className='size-6 -mt-3 float-right -mr-5 cursor-pointer hover:text-red-600 hover:size-8 hover:-mt-4 hover:-mr-6'
                      onClick={() => dispatch(removeflashCard(flashCard.id))}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Display group description and the number of cards */}
            <p className='md:col-span-12 text-sm text-gray-500'>
              {flashCard.text.description}
            </p>

            {/* Display the number of cards */}
            <p className='text-sm mt-5'>{"Card "+ (flashCard.text.cards).length}</p>

            
            <div className='md:col-span-6'>
              {/* Link to view the cards of the flashcard group with HiArrowNarrowRight icon*/}
              <Link 
                to={{
                  pathname: `${flashCard.id}`,
                  state:{stateParam: true}
                }}
                className='font-medium flex text-red-500 hover:text-red-700'
              >View Cards <HiArrowNarrowRight className='ml-2 mt-1'/></Link>
            </div>
          
          </div>
        </div>
      ))}
      </div>
    </div>
    : <div className='text-center font-bold text-red-600'>
      No Flashcard
    </div>
  )
}

// Export the OpenFlashcards component as the default export
export default OpenFlashcards