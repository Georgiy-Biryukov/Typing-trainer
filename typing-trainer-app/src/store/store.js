import { configureStore } from '@reduxjs/toolkit';
import typingFieldReducer from './typingField.slice';

export const store = configureStore({
  reducer: {
    typing: typingFieldReducer,
  },
});
