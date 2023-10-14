import { configureStore } from '@reduxjs/toolkit';
import cryptoListReducer from '../features/cryptoList/cryptoListSlice';
import cryptoDetailsReducer from '../features/cryptoDetails/cryptoDetailsSlice';

export const store = configureStore({
    reducer: {
      cryptoList: cryptoListReducer,
      cryptoDetails: cryptoDetailsReducer,
    }
  });

  