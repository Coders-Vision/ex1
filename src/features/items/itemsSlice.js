import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getItems, getItemById } from "../../apiService";

export const getAllItemsAsync = createAsyncThunk(
  "items/getItems",
  async () => {
    const response = await getItems();
    return response.data;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    error: null,
    status: null,
  },
  reducers: {
    // getItems: (state) => {},
  },
  extraReducers: {
    [getAllItemsAsync.pending]: (state) => {
      state.error = null;
      state.status = "Getting Items..";
    },
    [getAllItemsAsync.fulfilled]: (state, action) => {
      state.items =  action.payload
      state.status = "Items Fetched";
    },
    [getAllItemsAsync.rejected]: (state, action) => {
      const { message } = action.error;
      state.error = message;
      state.status = "Error fetching Items";
    },
  },
});

// export const { } = itemsSlice.actions;

export const selectItems = (state) => state.items.items;
export const selectStatus = (state) => state.items.status;
export const selectError = (state) => state.items.error;
export default itemsSlice.reducer;
