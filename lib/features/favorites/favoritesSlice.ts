import { createAppSlice } from "@/lib/createAppSlice";

import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import {
  addToFavoritesProduct,
  getFavoritesFromDb,
  removeProductFromFavorites,
} from "./favoritesApi";

export interface FavoritesSliceState {
  productId: string;
  dateAdded: string;
}

const initialState: FavoritesSliceState[] = [];

export const getFavorites = createAsyncThunk(
  "api/favorites",
  getFavoritesFromDb
);
export const addToFavorites = createAsyncThunk(
  "api/favorites/addOne",
  addToFavoritesProduct
);
export const removeFromFavorites = createAsyncThunk(
  "api/favorites/removeOne",
  removeProductFromFavorites
);

export const favoritesSlice = createAppSlice({
  name: "favoritesSlice",
  initialState: initialState,
  reducers: (create) => ({
    addToFavoritesInLS: create.reducer(
      (state, action: PayloadAction<FavoritesSliceState>) => {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    ),
    removeFavoritesFromLS: create.reducer(
      (state, action: PayloadAction<string>) => {
        const newState = state.filter((f) => f.productId !== action.payload);
        localStorage.setItem("favorites", JSON.stringify(newState));
        return newState;
      }
    ),

    setInitialStateFromLS: create.reducer(
      (state, action: PayloadAction<FavoritesSliceState[]>) => {
        return (state = action.payload);
      }
    ),
  }),

  selectors: {
    selectFavorites: (state) => state,
    selectFavoritesId: (state) => state?.map((f) => f.productId),
  },

  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      if (!action.payload.favoritesId.length) {
        const dataFromLS = localStorage.getItem("favorites");
        if (dataFromLS) {
          const initialDataFromLS = JSON.parse(dataFromLS);
          state = initialDataFromLS;
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites/addMany`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: action.payload.email,
              newData: initialDataFromLS,
            }),
          });
          return;
        }
      }
      return (state = action.payload.favoritesId);
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      return (state = action.payload.updateFavorites.favoritesId);
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      return (state = action.payload.updateFavorites.favoritesId);
    });
  },
});

export const {
  addToFavoritesInLS,
  removeFavoritesFromLS,
  setInitialStateFromLS,
} = favoritesSlice.actions;
export const { selectFavorites, selectFavoritesId } = favoritesSlice.selectors;
