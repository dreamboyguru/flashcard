import { createSlice, nanoid } from "@reduxjs/toolkit";     // Import necessary functions from Redux Toolkit


// Retrieve saved flash card data from localStorage or set it to an empty array
const grouplocal = localStorage.getItem('groupData');
const initialState = {
    flashCards: grouplocal ? JSON.parse(grouplocal) : []
}


// Create a Redux slice for managing flash card state
export const flashCardSlice = createSlice({
    name: 'flashCard',
    initialState,
    reducers : {
        // Add a new flash card to the redux state and localStorage
        addflashCard : (state, action) => {
            const flashCard = {
                id : nanoid(),
                text : action.payload
            }
            // Update localStorage with the new flash card
            localStorage.setItem('groupData', JSON.stringify([...state.flashCards, flashCard]));
            
            // Update redux state with the new flash card
            state.flashCards.push(flashCard)
        },

        // Remove a flash card from the redux state and update localStorage
        removeflashCard : (state, action) => {
            // Filter out the flash card with the specified id
            state.flashCards = state.flashCards.filter((flashCard) => flashCard.id !== action.payload)

            // Update localStorage with the updated flash card list
            localStorage.setItem('groupData', JSON.stringify([...state.flashCards]));
        }
    }
})

// Export the actions for adding and removing flash cards
export const {addflashCard, removeflashCard} = flashCardSlice.actions

// Export the flash card reducer for use in the Redux store
export default flashCardSlice.reducer