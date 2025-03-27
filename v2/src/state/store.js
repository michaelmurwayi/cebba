import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import reducer from './reducer'; // Ensure this is the correct reducer

const store = configureStore({
    reducer: {
        app: reducer,  // Give it a meaningful name
    },
    preloadedState: initialState, // Corrected property name
});

export default store;
