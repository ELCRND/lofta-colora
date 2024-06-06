import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/slices/productSlice";
import { LoadingSlice } from "./features/slices/loadingSlice";
import { favoritesSlice } from "./features/favorites/favoritesSlice";
import { authSlice } from "./features/auth/authSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineSlices(
  productSlice,
  LoadingSlice,
  favoritesSlice,
  authSlice
);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,

    devTools: true,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
