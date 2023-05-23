import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancy } from '../../types';

interface VacancyState {
  items: IVacancy[];
}
const initialState: VacancyState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addVacancy(state, action: PayloadAction<IVacancy>) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeVacancy(state, action: PayloadAction<IVacancy>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default favoriteSlice.reducer;
