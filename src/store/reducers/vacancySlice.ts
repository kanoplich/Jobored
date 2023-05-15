import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VacancyState {
  id: number;
}
const initialState: VacancyState = {
  id: 1,
};

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    cardId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export default vacancySlice.reducer;
