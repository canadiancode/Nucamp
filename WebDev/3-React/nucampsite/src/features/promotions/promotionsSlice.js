import { PROMOTIONS } from '../../app/shared/PROMOTIONS.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    promotionsArray: PROMOTIONS,
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
});

export const promotionsReducer = promotionsSlice.reducer;



export const selectFeaturedPromotion = (state) => {
    // will return the first true it finds for featured promotion
    return state.promotions.promotionsArray.find(
        (promotions) => promotions.featured
    );
}