import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Datareducers/Dr';
const store = configureStore({
    reducer: {
        DataReducer, SelectDataReducer
    }
})
export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { DataReducer, SelectDataReducer } from './Datareducers/Dr'; // Adjust the import path as necessary

// const store = configureStore({
//     reducer: {
//         DataReducer,         // Use the DataReducer
//         SelectDataReducer,   // Use the SelectDataReducer
//     },
// });

// export default store;
