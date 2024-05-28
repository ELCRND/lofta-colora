"use client";
import { IProduct } from "@/types/products";
import ProductCard from "./ProductCard/ProductCard";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ProductModal from "./ProductModal/ProductModal";
import { bodyScrollOff, bodyScrollOn } from "@/lib/utils/common";
import { useAppSelector } from "@/lib/hooks";

const Catalog = ({ products }: { products: IProduct[] }) => {
  const [showModal, setShowModal] = useState(false);
  const favorites = useAppSelector((state) => state.favoritesSlice).map(
    (f) => f._id
  );

  // console.log(isFavoritess);

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
      <h1>ftglkhjsgfi</h1>
      <div className="  grid gap-x-10 gap-y-28 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  ">
        {products.map((product: IProduct) => (
          <ProductCard
            key={product._id}
            product={product}
            modalHandler={handleModalOpen}
            favorites={favorites}
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
