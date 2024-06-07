"use client";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductModal from "../Catalog/ProductModal/ProductModal";
import FavoriteProductCard from "./FavoriteProductCard.tsx/FavoriteProductCard";

import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  getFavorites,
  selectFavorites,
  selectFavoritesId,
} from "@/lib/features/favorites/favoritesSlice";
import { IProduct } from "@/types/products";
import { selectUser } from "@/lib/features/auth/authSlice";

const Favorites = ({ products }: { products: IProduct[] }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const favorites = useAppSelector(selectFavorites);
  const favoritesId = useAppSelector(selectFavoritesId);
  const favoritesProducts = products?.filter((product: IProduct) => {
    const idx = favoritesId.indexOf(product._id);
    if (idx >= 0 && product._id === favorites[idx].productId) {
      return { ...product, date: favorites[idx].dateAdded };
    }
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user?.email || favorites) return;
    dispatch(getFavorites(user?.email!));
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
    <section className="min-h-screen pt-32 flex  justify-center items-center bg-black bg-[url('/common_layers_base.jpeg')]">
      <div className="w-3/4 flex flex-col gap-16 ">
        {favoritesProducts.map((f) => (
          <FavoriteProductCard
            key={f._id}
            product={f}
            modalHandler={handleModalOpen}
            user={user}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          cnModal="_product-modal"
          cnModalWrapper="_common-modal-wrapper"
        >
          <ProductModal />
        </Modal>
      )}
    </section>
  );
};

export default Favorites;
