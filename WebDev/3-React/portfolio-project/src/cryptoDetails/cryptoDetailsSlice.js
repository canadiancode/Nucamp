// src/features/cryptoDetails/cryptoDetailsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCryptoDetails } from '../../api/cryptoAPI';

// Async thunk to fetch the details of a specific cryptocurrency
export const fetchCryptoDetails = createAsyncThunk(
  'cryptoDetails/fetchCryptoDetails',
  async (cryptoId) => {
    const response = await getCryptoDetails(cryptoId);
    return response.data;
  }
);

const cryptoDetailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState: { entity: null, loading: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCryptoDetails.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(fetchCryptoDetails.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.loading = 'loaded';
    });
    builder.addCase(fetchCryptoDetails.rejected, (state) => {
      state.loading = 'failed';
    });
  }
});

export default cryptoDetailsSlice.reducer;
