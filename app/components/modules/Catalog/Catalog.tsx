"use client";
import { IProduct } from "@/types/products";
import ProductCard from "./ProductCard/ProductCard";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductModal from "./ProductModal/ProductModal";
import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectUser } from "@/lib/features/auth/authSlice";
import {
  getFavorites,
  selectFavoritesId,
} from "@/lib/features/favorites/favoritesSlice";

const Catalog = ({ products }: { products: IProduct[] }) => {
  const [showModal, setShowModal] = useState(false);
  const favorites = useAppSelector(selectFavoritesId);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

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
    <section className="_container min-h-screen pt-24 bg-black bg-[url('/common_layers_base.jpeg')]">
      <h1 className="text-[red]">ftglkhjsgfi</h1>
      <div className="  grid gap-x-10 gap-y-28 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  ">
        {products.map((product: IProduct) => (
          <ProductCard
            key={product._id}
            product={product}
            modalHandler={handleModalOpen}
            isFavorite={favorites?.includes(product._id) || false}
            email={user?.email!}
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

export default Catalog;
