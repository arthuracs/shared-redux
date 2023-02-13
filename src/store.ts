import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterReducer from "./components/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof store.getState>;

declare global {
  interface Window {
    store?: any;
  }
}

window.store = store;
export default store;
