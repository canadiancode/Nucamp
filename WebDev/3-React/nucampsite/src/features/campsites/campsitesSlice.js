import { CAMPSITES } from '../../app/shared/CAMPSITES.js';
import { createSlice } from '@reduxjs/toolkit';

// the array of campsites from our local file
const initialState = {
    campsitesArray: CAMPSITES
};

// slice created to easily take actions/update app state
const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
});

// export slice to easily update state
export const campsitesReducer = campsitesSlice.reducer;

// return all campsites
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

// find the selected campsite 
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
}

export const selectFeaturedCampsite = (state) => {
    return state.camspites.campsitesArray.find((campsite) => campsite.featured);
}