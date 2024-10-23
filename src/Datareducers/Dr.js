// import { createReducer } from "@reduxjs/toolkit";
// export const DataReducer = createReducer({}, {
//     DATA_REQUEST: (state) => {
//         state.loading = true;
//     },
//     DATA_SUCCESS: (state, action) => {
//         state.loading = false;
//         state.allTickets = action.payload.tickets;
//         state.allUser = action.payload.users;
//     },
//     DATA_FAILURE: (state) => {
//         state.loading = false;
//         state.allTickets = []
//         state.allUser = [];
//     },
// });
// export const SelectDataReducer = createReducer({}, {
//     SELECT_DATA_REQUEST: (state) => {
//         state.loading = true;
//         state.selectedData = [];
//     },
//     SELECT_DATA_SUCCESS: (state, action) => {
//         state.loading = false;
//         state.selectedData = action.payload.selectedData;
//         state.user = action.payload.user
//     },
//     SELECT_DATA_FAILURE: (state, action) => {
//         state.loading = false;
//         state.selectedData = []
//         state.message = action.payload.message
//     },
// });




// import { createSlice } from "@reduxjs/toolkit";

// // Create a slice for data
// const dataSlice = createSlice({
//     name: 'data',
//     initialState: {
//         loading: false,
//         allTickets: [],
//         allUser: [],
//     },
//     reducers: {
//         DATA_REQUEST(state) {
//             state.loading = true;
//         },
//         DATA_SUCCESS(state, action) {
//             state.loading = false;
//             state.allTickets = action.payload.tickets;
//             state.allUser = action.payload.users;
//         },
//         DATA_FAILURE(state) {
//             state.loading = false;
//             state.allTickets = [];
//             state.allUser = [];
//         },
//     },
// });

// // Create a slice for selected data
// const selectDataSlice = createSlice({
//     name: 'selectData',
//     initialState: {
//         loading: false,
//         selectedData: [],
//         user: null,
//         message: '',
//     },
//     reducers: {
//         SELECT_DATA_REQUEST(state) {
//             state.loading = true;
//             state.selectedData = [];
//         },
//         SELECT_DATA_SUCCESS(state, action) {
//             state.loading = false;
//             state.selectedData = action.payload.selectedData;
//             state.user = action.payload.user;
//         },
//         SELECT_DATA_FAILURE(state, action) {
//             state.loading = false;
//             state.selectedData = [];
//             state.message = action.payload.message;
//         },
//     },
// });

// // Export actions
// export const {
//     DATA_REQUEST,
//     DATA_SUCCESS,
//     DATA_FAILURE,
// } = dataSlice.actions;

// export const {
//     SELECT_DATA_REQUEST,
//     SELECT_DATA_SUCCESS,
//     SELECT_DATA_FAILURE,
// } = selectDataSlice.actions;

// // Export reducers
// export const DataReducer = dataSlice.reducer;
// export const SelectDataReducer = selectDataSlice.reducer;


import { createReducer } from "@reduxjs/toolkit";

// DataReducer
export const DataReducer = createReducer(
    {
        loading: false,
        allTickets: [],
        allUser: [],
    },
    (builder) => {
        builder
            .addCase('DATA_REQUEST', (state) => {
                state.loading = true;
            })
            .addCase('DATA_SUCCESS', (state, action) => {
                state.loading = false;
                state.allTickets = action.payload.tickets;
                state.allUser = action.payload.users;
            })
            .addCase('DATA_FAILURE', (state) => {
                state.loading = false;
                state.allTickets = [];
                state.allUser = [];
            });
    }
);

// SelectDataReducer
export const SelectDataReducer = createReducer(
    {
        loading: false,
        selectedData: [],
        user: null,
        message: '',
    },
    (builder) => {
        builder
            .addCase('SELECT_DATA_REQUEST', (state) => {
                state.loading = true;
                state.selectedData = [];
            })
            .addCase('SELECT_DATA_SUCCESS', (state, action) => {
                state.loading = false;
                state.selectedData = action.payload.selectedData;
                state.user = action.payload.user;
            })
            .addCase('SELECT_DATA_FAILURE', (state, action) => {
                state.loading = false;
                state.selectedData = [];
                state.message = action.payload.message;
            });
    }
);
