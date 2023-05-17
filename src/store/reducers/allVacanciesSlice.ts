import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancies } from '../../types';

const initialState: IVacancies = {
  objects: [],
};

export const allVacanciesSlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    vacanciesData(state, action: PayloadAction<IVacancies>) {
      state.objects = action.payload.objects;
    },
  },
});

export default allVacanciesSlice.reducer;
