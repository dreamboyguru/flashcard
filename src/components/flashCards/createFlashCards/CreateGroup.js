import React from 'react'                         
import { Field, ErrorMessage } from 'formik'        // Import necessary dependencies from Formik


function CreateGroup() {
  return (
        // Container for group-related form fields with styling
        <div className='flex flex-col px-10 sm:px-8 bg-white  rounded-md shadow-lg'> 

            {/* Label for the 'groupName' input */}
            <label 
                htmlFor='groupName'
                className='text-gray-600 py-3 font-medium'
            >
                Create Group*
            </label>

            {/* Input field for 'groupName' with specified styles */}
            <Field
                type="text"
                className="w-full h-14 border-solid border-2 border-blue-100 rounded-l"
                name='groupName'
                id='groupName'
            />

            {/* Display error message for 'groupName' if validation fails */}
            <div className='text-red-600 mb-7'>
                <ErrorMessage name='groupName'/>
            </div>

            {/* Label for the 'description' textarea */}
            <label 
                htmlFor='description'
                className='text-gray-600 pb-3 font-medium'
            >
                Add description
            </label>

            {/* Textarea for 'description' with specified styles */}
            <Field as="textarea"
                type="text"
                className="w-full h-24 border-solid border-2 border-blue-100 rounded-l"
                name='description'
                id='description'
            />
            {/* Display error message for 'description' if validation fails */}
            <div className='text-red-600 mb-7'>
            <ErrorMessage name='description'/>
            </div>
        </div>
  )
}

// Export the CreateGroup component as the default export
export default CreateGroup