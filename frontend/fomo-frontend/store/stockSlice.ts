// store/stockSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stock {
  name: string;
  price: number;
}

interface StockState {
  data: Stock[];
}

const initialState: StockState = {
  data: [],
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks(state, action: PayloadAction<Stock[]>) {
      state.data = action.payload;
    },
  },
});

export const { setStocks } = stockSlice.actions;

export default stockSlice.reducer;
