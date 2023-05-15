import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  keyword: string;
  payment_from: number;
  payment_to: number;
  catalogues: number;
}
const initialState: SearchState = {
  keyword: '',
  payment_from: 0,
  payment_to: 0,
  catalogues: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    searchPaymentFrom(state, action: PayloadAction<number>) {
      state.payment_from = action.payload;
    },
    searchPaymentTo(state, action: PayloadAction<number>) {
      state.payment_to = action.payload;
    },
    searchPaymentCatalogues(state, action: PayloadAction<number>) {
      state.catalogues = action.payload;
    },
  },
});

export default searchSlice.reducer;
