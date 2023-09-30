import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
});

export const commentsReducer = commentsSlice.reducer;

// We put in (state) so that the higher order function, which is the outer function, 
// has access to the state.
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

