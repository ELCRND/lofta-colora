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
    addToFavoritesToLS: create.reducer(
      (state, action: PayloadAction<FavoritesSliceState>) => {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
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

export const { addToFavoritesToLS, setInitialStateFromLS } =
  favoritesSlice.actions;
export const { selectFavorites, selectFavoritesId } = favoritesSlice.selectors;
