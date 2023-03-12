import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import colorNickSlice from "./slices/colorNickSlice";
import playerTitleSlice from "./slices/playerTitleSlice";
import indexSlice from "./slices/indexSlice";

const rootReducer = combineReducers({
  index: indexSlice.reducer,
  playerTitle: playerTitleSlice.reducer,
  colorNick: colorNickSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
