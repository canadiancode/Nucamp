import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/baseUrl';

// Fetch data async using createAsyncThunk & Redux
export const fetchList = createAsyncThunk(
    'input/fetchList',
    async () => {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
);

// Initial state of the app
const initialState = {
    assetsArray: [],
    isLoading: true,
    errMsg: '',
};

// slice created to easily take actions/update app state
const inputsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchList.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '',
            state.assetsArray = action.payload;
        },
        [fetchList.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

// Export slice to easily update the state
export const assetReducer = inputsSlice.reducer;

// Selectors
export const selectAssetsArray = (state) => state.assets.assetsArray;
export const selectLoadingStatus = (state) => state.assets.isLoading;
export const selectErrorMessage = (state) => state.assets.errMsg;