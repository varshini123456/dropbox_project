import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './reducers/fileReducer';

export const store = configureStore({
  reducer: {
    files: fileReducer
  }
});
