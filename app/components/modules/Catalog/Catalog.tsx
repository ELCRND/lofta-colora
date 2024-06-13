"use client";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductCard from "./ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import { selectUser } from "@/lib/features/auth/authSlice";
import { getBasket, selectBasket } from "@/lib/features/basket/basketSlice";
import { selectFavorites } from "@/lib/features/favorites/favoritesSlice";
import { getFavorites } from "@/lib/features/favorites/favoritesUtils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { IProduct } from "@/types/products";

const Catalog = ({ products }: { products: IProduct[] }) => {
  const [showModal, setShowModal] = useState(false);
  const { products: favoritesProducts, isLoading } =
    useAppSelector(selectFavorites);
  const favorites = favoritesProducts?.map((f) => f.productId);
  const basket = useAppSelector(selectBasket);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) return;
    dispatch(getFavorites(user?.email!));
  }, [user]);
  useEffect(() => {
    if (user?.email && basket.length === 0) {
      dispatch(getBasket(user.email));
    }
  }, [user?.email]);

  const handleModalOpen = () => {
    setShowModal(true);
    bodyScrollOff();
  };
  const handleModalClose = () => {
    setShowModal(false);
    bodyScrollOn();
  };
  return (
    <section className="_container min-h-screen pt-40 bg-black bg-[url('/common_layers_base.jpeg')]">
      <h1 className="mb-16 pl-2 text-4xl text-white border-b-2">Каталог</h1>
      <div className="grid gap-x-10 gap-y-28 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  ">
        {products.map((product: IProduct) => (
          <ProductCard
            key={product._id}
            product={product}
            modalHandler={handleModalOpen}
            isFavorite={favorites?.includes(product._id) || false}
            email={user?.email!}
            isLoading={isLoading}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          cnModal="_product-modal"
          cnModalWrapper="_common-modal-wrapper"
        >
          <ProductModal email={user?.email || ""} />
        </Modal>
      )}
    </section>
  );
};

export default Catalog;
