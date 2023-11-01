import { createSlice } from "@reduxjs/toolkit";
import { CurrencyStateSchema } from "../../../../entities/Currency/model/types";
import { endpoints } from "@/features/Currency/api/currencyAPI";

const initialState: CurrencyStateSchema = {
  name: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(endpoints.getAllCurrencies.matchFulfilled, (state, action) => {
      state.name = action.payload[0].name
    }),
      builder.addMatcher(endpoints.getAllCurrencies.matchRejected, (state) => {
        state.name = ''
      })
  }

});

export const { actions: currencyActions } = currencySlice;
export const { reducer: currencyReducer } = currencySlice;