// Import React and useState hook from 'react'
import React, { useState } from 'react'

// Import useSelector, Link, useParams for Redux state and routing
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

// Import icons from react-icons for UI elements
import { FaLongArrowAltLeft, FaShare } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import { ImPrinter } from "react-icons/im";

// Import Share component
import Share from './Share'


// Functional component for displaying details of flashcards
function CardsDetails() {
    
    // Retrieve the type (id) of flashcard from the URL parameters
    const type = useParams().type;

    // Retrieve flashcards from the Redux store using useSelector
    const flashCards = useSelector(state => state.flashCards);

    // State to manage the visibility of the share modal
    const [showModel, setshowModel] = useState(false)

    // State to manage the current card being displayed
    const [cardHandler, setCardHandle] = useState(0);

    // Function to handle navigation between flashcards 
    const Handle = (n, arr) => {
        if (n === 1) {
            if (arr.length - 1 > cardHandler) {
                setCardHandle(cardHandler + n);
            } else {
                setCardHandle(0);
            }
        } else if (n === -1) {
            if (cardHandler <= 0) {
                setCardHandle(arr.length - 1);
            } else if (cardHandler > 0) {
                setCardHandle(cardHandler + n)
            }
        }
    }

    // Function to handle selecting a specific flashcard term
    const termHandle = (i) => {
        setCardHandle(i)
    }
    
    return (
        <>
        {/* Share model component */}
        <Share isvisible={showModel} onClose={()=>setshowModel(false)} /> 
        <div className='xl:w-2/3 xl:ml-60 lg:w3/4 lg:ml-24 md:w-4/5 md:ml-20 sm:w-full mb-5 pl-2'>

            {/* Map through flashcards and display details for the selected flashcard */}
            {flashCards.map((flashCard, index) =>{
                return(
                    flashCard.id === type ?
                        <div key={index}>

                            {/* Navigation link with FaLongArrowAltLeft icon to go back to flashcard list */}
                            <Link to='../OpenFlashcards'
                                className='flex font-bold text-black hover:text-red-600'
                            ><FaLongArrowAltLeft className='mt-0.5 size-6 mr-2'/>{flashCard.text.groupName}</Link>

                            {/* Display flashcard group description */}
                            <h2 className='text-sm text-gray-800 pl-8 pt-4'>{flashCard.text.description}</h2>
                        
                        {/* Display flashcard navigation and details */}
                        <div className='flex flex-col lg:items-start lg:flex-row lg:justify-between sm:items-center sm:justify-center sm:flex-col mb-4'></div>

                        <div className='flex flex-wrap justify-items-stretch max-sm:flex-col max-md:flex-col max-lg:flex-col'>
                            
                            {/* Flashcard list */}
                            <div className='flex w-[20%] px-2 max-sm:w-full max-md:w-full max-lg:w-full'>
                                <div className='p-2 my-4 bg-white  rounded-md shadow-lg py-4 w-full'> 
                                    <div className='text-sm text-center pb-2 text-gray-500'>Flashcards </div>
                                    <hr className='bg-gray-200 h-1'/>
                                    <h1 className='font-extrabold pt-2 text-red-500'>Card List</h1>
                                    {/* List of flashcard terms */}
                                    <ul>
                                        {flashCard.text.cards.map((subflashCard, i) =>{
                                            return(
                                                
                                                <li key={i} 
                                                    className={`px-5 py-1.5 cursor-pointe font-bold hover:font-extrabold ${cardHandler === i ? 'text-red-600 font-extrabold hover:font-extrabold' : null}`}
                                                >   
                                                    <button
                                                        onClick={(e)=>termHandle(i)}
                                                    >
                                                        <span>{(i+1)+'. '}</span>{subflashCard.term}
                                                    </button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            {/* Display selected flashcard details */}
                            <div className='flex w-[60%] px-2 max-sm:w-full max-md:w-full max-lg:w-full'>
                                <div className='flex-wrap justify-items-stretch w-full'>
                                    <div className='p-10 my-4 bg-white  rounded-md shadow-lg py-5 w-full'>
                                                                               
                                        {flashCard.text.cards.map((card , i) => (
                                            i === cardHandler ?
                                                <p key={i}>{card.defination}</p>
                                            : null
                                        ))}

                                    </div>

                                    {/* Navigation controls */} 
                                    <div className='mt-10 text-center w-full'>
                                        <span 
                                            className='text-4xl mr-10 cursor-pointer hover:text-red-600'
                                            onClick={() =>Handle(-1, flashCard.text.cards)}
                                        >{"<"}</span>
                                        <span className='text-2xl'>{cardHandler+1}/{flashCard.text.cards.length}</span>
                                        <span 
                                            className='text-4xl ml-10 cursor-pointer hover:text-red-600'
                                            onClick={() =>Handle(1, flashCard.text.cards)}
                                        >{">"}</span>            
                                    </div>

                                </div>
                            </div>

                            {/* Container for action buttons (20% width on larger screens) */}
                            <div className=' flex flex-col w-[20%] px-2 max-sm:w-full max-md:w-full max-lg:w-full'>

                                {/* Share button section */}
                                <div className='flex flex-row mt-4 bg-white  rounded-md shadow-lg py-3 w-full border-2 cursor-pointer hover:bg-gray-100'
                                    onClick={()=>setshowModel(true)}> 
                                    <div>
                                        {/* Share icon */}
                                        <FaShare className='ml-4 size-5'/>
                                    </div>
                                    <div className='ml-4'>Share</div>
                                </div>
                                
                                {/* Download button section */}
                                <div className='flex flex-row mt-2 bg-white  rounded-md shadow-lg py-3 w-full cursor-pointer hover:bg-gray-100'>
                                    <div>
                                        {/* Download icon */}
                                        <MdCloudDownload className='ml-4 size-6'/>
                                    </div>
                                    <div className='ml-4'>Download</div>
                                </div>

                                 {/* Print button section */}
                                <div className='flex flex-row mt-2 bg-white  rounded-md shadow-lg py-3 w-full cursor-pointer hover:bg-gray-100'> 
                                    <div>
                                        {/* Print icon */}  
                                        <ImPrinter className='ml-4 size-6'/>
                                    </div>
                                    <div className='ml-4'>Print</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    : null
                )
            })}  
            
        </div> 
        </>
    )
}

// Export the CardsDetails component as the default export
export default CardsDetails
