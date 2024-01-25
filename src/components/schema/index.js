import * as Yup from 'yup'          // Import Yup for schema validation


// Define a validation schema for the group form using Yup
export const GroupSchema = Yup.object().shape({

    // Validation for the group name field
    groupName: Yup.string()
        .min(4,'Please add minimum 4 characters')
        .required('Group Name is required'),


    // Validation for the description field
    description: Yup.string()
        .min(15,'Please add minimum 15 characters')
        .required('Defination is required'),


    // Validation for the array of cards
    cards : Yup.array().of(Yup.object().shape({

        // Validation for the term field within each card
        term : Yup.string()
            .min(4,'Please add minimum 4 characters')
            .required('Term is required'),

        // Validation for the definition field within each card
        defination : Yup.string()
            .min(15,'Please add minimum 15 characters')
            .required('Defination is required')
    }))
})
