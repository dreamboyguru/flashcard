// Import necessary dependencies from React, Formik, and React Icons
import React from 'react'
import { FieldArray, Field, ErrorMessage } from 'formik';
import { MdDelete } from "react-icons/md";

function CreateCards({formik}) {
  return (
    // Use FieldArray from Formik to handle array fields
    <FieldArray
        name='cards'
        id='cards'
        render={(arrayHelpers) => {
        return (
            // Container for flashcard-related form fields with styling
            <div className='px-10 bg-white  rounded-md shadow-lg py-5'> 
                
            {/* Map through the 'cards' array in formik.values */}
            {formik.values.cards.map((card, index) => {
                return(
                    // Container for each flashcard entry
                    <div className='flex max-md:flex-col' key={index}>

                        {/* Index indicator for the flashcard */}
                        <div className='bg-red-600 rounded-full h-7 w-12  text-center -ml-8 max-md:ml-2 max-md:w-7 max-md:mt-1'>
                            <span className='text-white text-sm'>{index + 1}</span>
                        </div>

                        {/* Container for 'term' input */}
                        <div className='flex flex-col justify-between w-3/5 px-2 max-md:w-full'>
                            <label 
                                htmlFor={`cards.${index}.term`}
                                className='text-gray-600 pb-3 font-medium'
                            >
                                Enter Term*
                            </label>
                            <Field
                                type="text"
                                className='w-full h-14 border-solid border-2 border-blue-100 rounded-l'
                                name={`cards.${index}.term`}
                                id={`cards.${index}.term`}
                                
                            />

                            {/* Display error message for 'term' if validation fails */}
                            <div className='text-red-600 mb-7'>
                                <ErrorMessage name={`cards.${index}.term`}/>
                            </div>
                        </div>

                        {/* Container for 'definition' input */}
                        <div className='flex flex-col justify-between w-full px-2'>
                            <label 
                                htmlFor={`cards.${index}.defination`}
                                className='text-gray-600 pb-3 font-medium'
                            >
                                Enter Defination*
                            </label>
                            <Field
                                type="text"
                                className='w-full h-14 border-solid border-2 border-blue-100 rounded-l'
                                name={`cards.${index}.defination`}
                                id={`cards.${index}.defination`}
                            />

                            {/* Display error message for 'definition' if validation fails */}
                            <div className='text-red-600 mb-7'>
                                <ErrorMessage name={`cards.${index}.defination`}/>
                            </div>
                        </div>

                        {/* Container for delete button */}
                        <div className='flex flex-col justify-between w-1/12  max-md:w-full max-md:-mt-12'>
                            {/* Display delete button for all cards except the first one */}
                            {(index !== 0) ? 
                                (<button type='button' 
                                    className='mt-8 pt-4 font-medium  text-red-600 w-full'
                                    onClick={()=>arrayHelpers.remove(index)} 
                                ><MdDelete className=' justify-center items-center size-6 w-full  hover:text-red-900'/></button>)
                                : null
                            }
                        </div>

                        {/* Horizontal rule separating each flashcard entry */}
                        <hr className={`h-0.5 bg-gray-200 ${index === 0 ? ('mt-10') : null }`}/>

                    </div> 
                )
            })}

            {/* Button to add a new flashcard entry */}
            <div>
                <button type='button' 
                className='py-4 font-medium  text-blue-700 hover:text-red-600 hover:font-bold'
                onClick={()=>arrayHelpers.insert(
                    formik.values.cards.length + 1, 
                    {
                    term: '',
                    defination : ''
                    })} 
                >
                + Add
                </button>
            </div>
            </div>
        );
        }}
    />
  )
}

// Export the CreateCards component as the default export
export default CreateCards

