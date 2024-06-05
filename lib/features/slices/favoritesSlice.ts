import { createAppSlice } from "@/lib/createAppSlice";
import { IProduct } from "@/types/products";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

export const favoritesSlice = createAppSlice({
  name: "favoritesSlice",
  initialState: initialState,
  reducers: (create) => ({
    addToFavorites: create.reducer((state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    }),

    removeFromFavorites: create.reducer(
      (state, action: PayloadAction<string>) => {
        const newState = state.filter(
          (favorite) => favorite._id !== action.payload
        );
        localStorage.setItem("favorites", JSON.stringify(newState));
        return newState;
      }
    ),

    setInitialStateFromLS: create.reducer(
      (state, action: PayloadAction<IProduct[]>) => {
        return (state = action.payload);
      }
    ),
  }),

  selectors: {
    selectFavorites: (favoritesArray) => favoritesArray,
    selectFavoritesId: (favoritesArray) => favoritesArray.map((f) => f._id),
  },
});

export const { addToFavorites, removeFromFavorites, setInitialStateFromLS } =
  favoritesSlice.actions;
export const { selectFavorites, selectFavoritesId } = favoritesSlice.selectors;
