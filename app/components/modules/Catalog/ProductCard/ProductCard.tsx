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
import CardActions from "@/app/components/elements/Catalog/CardActions";

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

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const addToFavirites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product._id));
      return;
    }
    dispatch(
      addToFavorites({
        ...product,
        date: new Intl.DateTimeFormat("ru-RU", options).format(date),
      })
    );
  };

  return (
    <div
      tabIndex={0}
      className="py-5 flex flex-col items-center relative text-white bg-slate-800 bg-opacity-20 rounded-3xl border border-gray-800 hover:border-gray-400 hover:bg-opacity-30 focus:bg-opacity-30 transition-colors"
    >
      <CardActions isFavorite={isFavorite} handleClick={addToFavirites} />
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
