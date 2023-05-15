import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/apiSlice';
import vacancyReducer from './reducers/vacancySlice';
import favoriteSlice from './reducers/favoriteSlice';

export const store = configureStore({
  reducer: {
    vacancyReducer,
    favoriteSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
