import { configureStore } from "@reduxjs/toolkit";      // Import the configureStore function from Redux Toolkit
import flashCardSlice from "../slices/flashCardSlice";  // Import the flashCardSlice reducer from its location


// Create the Redux store using configureStore, specifying the flashCardSlice as the reducer
export const store = configureStore({
    reducer: flashCardSlice
})