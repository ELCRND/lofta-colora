"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SettingsBtn from "../../elements/Basket/SettingsBtn";
import { selectUser } from "@/lib/features/auth/authSlice";
import { useEffect } from "react";
import {
  getBasket,
  removeFromBasket,
  removeProductFromLS,
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
      dispatch(removeFromBasket({ email: user, productId, productSize }));
    } else {
      dispatch(removeProductFromLS(productId));
    }
  };
  useEffect(() => {
    if (user && products.length === 0) {
      dispatch(getBasket(user));
    }
  }, [user]);
  return (
    <section className="_container h-screen pt-32 relative overflow-hidden bg-black bg-[url('/basket/basket_bg.jpeg')] bg-cover bg-center">
      <h1 className="mb-16 text-3xl font-semibold text-white">Корзина</h1>
      <h2 className="pb-1 flex items-center gap-2 text-xl font-semibold text-white border-b-2">
        {user ? (
          <span>{user}</span>
        ) : (
          <span>Не авторизованный пользователь</span>
        )}
        <SettingsBtn />
        <button className="_btn ml-auto mr-10 mb-3 py-2 px-3  text-xl text-center text-amber-100 hover:text-amber-200 active:text-amber-100  transition-colors">
          Оформить заказ
        </button>
      </h2>

      <ol
        className={`w-full max-w-[60vw] h-[600px] mt-10 ml-auto pr-10 flex flex-col gap-10  _basket-scrollbar ${
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
    </section>
  );
};

export default Basket;
