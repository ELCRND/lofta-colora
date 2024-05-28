"use client";
import React, { useState } from "react";
import Image from "next/image";
import CardBtn from "@/app/components/elements/Product/CardBtn";
import CardSizeToggler from "@/app/components/elements/Product/CardSizeToggler";
import { setProduct } from "@/lib/features/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IProduct } from "@/types/products";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/features/slices/favoritesSlice";

type Props = {
  product: IProduct;
  modalHandler: VoidFunction;
  favorites: string[] | null;
};

const ProductCard = ({ product, modalHandler, favorites }: Props) => {
  const [size, setSize] = useState(0);
  const dispatch = useAppDispatch();
  const isFavorite = favorites?.includes(product._id);
  const handleClick = () => {
    dispatch(setProduct(product));
    modalHandler();
  };

  const handleFavoritesClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product._id));
      return;
    }
    dispatch(addToFavorites(product));
  };

  return (
    <div
      tabIndex={0}
      className="py-5 flex flex-col items-center relative text-white bg-slate-800 bg-opacity-20 rounded-3xl border border-gray-800 hover:border-gray-400 hover:bg-opacity-30 focus:bg-opacity-30 transition-colors"
    >
      <div className="p-2 flex flex-col justify-center items-center absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg">
        <button type="button" onClick={handleFavoritesClick}>
          {isFavorite ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
            </svg>
          )}
        </button>
      </div>
      <div className="w-36 h-40 flex justify-center items-center">
        <Image
          src={product.images[size]}
          alt={product.type}
          width="0"
          height="0"
          sizes="100px"
          className="w-full h-auto"
        />
      </div>
      <h2 className="mt-4 mb-6 text-center text-xl">
        {product.type}
        <br />
        {product.name}
      </h2>
      <CardSizeToggler id={product._id} handleSize={setSize} />
      <div className="w-full mt-4 flex justify-around items-center text-xl">
        <span>{product.price} Р</span>
        <CardBtn handleClick={handleClick} />
      </div>
    </div>
  );
};
export default ProductCard;
