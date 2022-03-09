import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import itemReducer from "../features/items/itemsSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemReducer,
  },
});
