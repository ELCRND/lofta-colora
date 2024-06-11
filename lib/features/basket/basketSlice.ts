import { createAppSlice } from "@/lib/createAppSlice";

import { createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import {
  addProductToBasket,
  getBasketFromDb,
  removeProductFromBasket,
} from "./basketApi";
import toast from "react-hot-toast";

export type BasketProduct = {
  id: string;
  name: string;
  type: string;
  count: number;
  price: number;
  img: string;
  size: number | string;
};

export interface BasketSliceState {
  isLoading: boolean;
  products: BasketProduct[];
}

const initialState: BasketSliceState = {
  isLoading: false,
  products: [],
};

export const getBasket = createAsyncThunk("api/basket", getBasketFromDb);
export const addToBasket = createAsyncThunk(
  "api/basket/addOne",
  addProductToBasket
);
export const removeFromBasket = createAsyncThunk(
  "api/basket/removeOne",
  removeProductFromBasket
);

export const basketSlice = createAppSlice({
  name: "basketSlice",
  initialState: initialState,
  reducers: (create) => ({
    addProductToLS: create.reducer(
      (state, action: PayloadAction<BasketProduct>) => {
        state.products.push(action.payload);
        localStorage.setItem("basket", JSON.stringify(state));
      }
    ),
    removeProductFromLS: create.reducer(
      (state, action: PayloadAction<string>) => {
        const newState = state.products.filter((f) => f.id !== action.payload);
        localStorage.setItem("basket", JSON.stringify(newState));
        state.products = newState;
      }
    ),

    setInitialBasketFromLS: create.reducer(
      (state, action: PayloadAction<BasketProduct[]>) => {
        state.products = action.payload;
      }
    ),
  }),

  selectors: {
    selectBasket: (state) => state.products,
    selectIsLoadingBasket: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => {
      // if (!action.payload.products.length) {
      //   const dataFromLS = localStorage.getItem("basket");
      //   if (dataFromLS) {
      //     const initialDataFromLS = JSON.parse(dataFromLS);
      //     state = initialDataFromLS;
      //     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/basket/addMany`, {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({
      //         email: action.payload.email,
      //         newData: initialDataFromLS,
      //       }),
      //     });
      //     return;
      //   }
      // }
      state.products = action.payload.products;
      state.isLoading = false;
    });
    builder.addCase(getBasket.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addToBasket.fulfilled, (state, action) => {
      if (action.payload.status === 201) {
        toast("Товар добавлен в корзину");
        state.products = action.payload.updateBasket.products;
      }
      state.isLoading = false;
    });
    builder.addCase(addToBasket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToBasket.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeFromBasket.fulfilled, (state, action) => {
      state.products = action.payload.updateBasket.products;
    });
  },
});

export const { addProductToLS, removeProductFromLS, setInitialBasketFromLS } =
  basketSlice.actions;
export const { selectBasket, selectIsLoadingBasket } = basketSlice.selectors;
