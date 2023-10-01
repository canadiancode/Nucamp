import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload:', action.payload)
            console.log('addComment action.commentsArray:', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

// We put in (state) so that the higher order function, which is the outer function, 
// has access to the state.
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

