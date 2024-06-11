"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SettingsBtn from "../../elements/Basket/SettingsBtn";
import { selectUser } from "@/lib/features/auth/authSlice";
import Image from "next/image";
import { useEffect } from "react";
import {
  getBasket,
  removeFromBasket,
  selectBasket,
} from "@/lib/features/basket/basketSlice";
import BusketProduct from "./BasketProduct/BasketProduct";

const Basket = () => {
  const user = useAppSelector(selectUser)?.email;
  const products = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();
  const handleRemoveFromBasket = (
    productId: string,
    productSize: number | string
  ) => {
    if (user) {
      console.log(productSize);
      dispatch(removeFromBasket({ email: user, productId, productSize }));
    }
  };
  useEffect(() => {
    if (user && products.length === 0) {
      dispatch(getBasket(user));
    }
  }, [user]);
  return (
    <section className="_container min-h-screen pt-32 relative overflow-hidden bg-black bg-[url('/common_layers_base.jpeg')] bg-cover">
      <h1 className="mb-16 text-3xl font-semibold text-white">Корзина</h1>
      <h2 className="pb-1 flex items-center gap-2 text-xl font-semibold text-white border-b-2">
        {user ? (
          <span>{user}</span>
        ) : (
          <span>Не авторизованный пользователь</span>
        )}
        <SettingsBtn />
      </h2>

      <ol
        className={`w-3/5 h-[600px] pr-10 flex flex-col gap-10 absolute top-1/3 right-20 z-10 ${
          products.length > 3 && "overflow-y-scroll"
        }`}
      >
        {products.map((product) => (
          <BusketProduct
            product={product}
            handleClick={handleRemoveFromBasket}
          />
        ))}
      </ol>

      <div className="w-full h-full max-w-[600px] max-h-[500px] p-4 absolute -bottom-5 -left-6 z-0 after:bg-[url('/basket/outline.png')] after:absolute after:-top-5 after:left-7 after:w-full after:h-full">
        <Image src={"/basket/bg.png"} alt="" width={600} height={500} />
      </div>
    </section>
  );
};

export default Basket;
