import { configureStore } from "@reduxjs/toolkit";
import slideCounterReducer from "./features/slideCounterSlice";

export const store = configureStore({
  reducer: {
    sliderCounter: slideCounterReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
