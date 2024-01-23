import React from 'react'                   
import { Formik, Form } from 'formik'       // Import necessary dependencies from Formik
import { useDispatch } from 'react-redux'   // Import useDispatch to interact with Redux store

// Import components for creating flashcards
import CreateGroup from './CreateGroup'
import CreateCards from './CreateCards'

import { GroupSchema } from '../../schema'  // Import GroupSchema for schema validation
import { addflashCard } from '../../../redux/slices/flashCardSlice' // Import Redux action to add flashcards


// Functional component for creating flashcards
function CreateFlashcard() {
    const dispatch = useDispatch()          // Get the dispatch function from Redux
    return (
        <>
        {/* Formik component for handling form state and validation */}
        <Formik
            initialValues={{
                groupName : '',
                description : '',
                cards : [{
                    term: '',
                    defination: ''
                }]
            }}
            validationSchema={GroupSchema}
            onSubmit={(values, {resetForm}) => {
                console.log(values)                     // Log the form values to console
                dispatch(addflashCard(values))          // Dispatch action to add flashcard to the Redux store
                resetForm();                            // Reset the form after submission
                alert('A Flash card is created Successful...')     // Display an alert indicating successful flashcard creation
            }}
        >
            {/* Render the form using the Formik render prop pattern */}
            {(formik) => {
                return(
                <Form>
                    {/* CreateGroup component for handling group-related form fields */}
                    <div className='xl:w-2/3 xl:ml-60 lg:w3/4 lg:ml-24 md:w-4/5 md:ml-20 sm:w-full mb-5 pl-2'>
                    <CreateGroup />
                    </div>

                    {/* CreateCards component for handling flashcard-related form fields */}
                    <div className='xl:w-2/3 xl:ml-60 lg:w3/4 lg:ml-24 md:w-4/5 md:ml-20 sm:w-full'>
                    <CreateCards formik={formik} />
                    </div>

                    {/* Submit button for triggering form submission */}
                    <div className='py-10 flex justify-center items-center'>
                    <button type='submit' className='bg-red-700 text-white px-10 py-2 rounded-md hover:bg-red-900' >Create</button>
                    </div>
                </Form>
                )
            }}
        </Formik>
        
        </>
    )
}

// Export the CreateFlashcard component as the default export
export default CreateFlashcard
