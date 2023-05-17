import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './reducers/apiSlice';
import vacancyReducer from './reducers/vacancySlice';
import favoriteSlice from './reducers/favoriteSlice';
import searchSlice from './reducers/searchSlice';
import allVacanciesSlice from './reducers/allVacanciesSlice';

export const store = configureStore({
  reducer: {
    vacancyReducer,
    favoriteSlice,
    searchSlice,
    allVacanciesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
