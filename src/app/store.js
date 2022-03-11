import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "../features/dashboard/dasboardSlice";
import userReducer from "../features/user/userSlice";
import itemReducer from "../features/items/itemsSlice";
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    user: userReducer,
    items: itemReducer,
  },
});
