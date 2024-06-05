"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ProductModal from "../Catalog/ProductModal/ProductModal";
import FavoriteProductCard from "./FavoriteProductCard.tsx/FavoriteProductCard";
import { selectFavorites } from "@/lib/features/slices/favoritesSlice";
import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { useAppSelector } from "@/lib/hooks";

const Favorites = () => {
  const favorites = useAppSelector(selectFavorites);
  const [showModal, setShowModal] = useState(false);
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
        {favorites.map((f) => (
          <FavoriteProductCard
            key={f._id}
            product={f}
            modalHandler={handleModalOpen}
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
