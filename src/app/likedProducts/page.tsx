"use client";
import { ProductDetail } from "@/api/api";
import { DetailsCard } from "@/components/DetailsCard";
import DetailsModalContent from "@/components/DetailsModalContent";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const LikedProducts: React.FC = () => {
  const likedList: ProductDetail[] = useSelector((state: any) => {
    return state.likedProducts.list;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductDetail | null>(
    null
  );
  const handleCardClick = (product: ProductDetail) => {
    setCurrentProduct(product);
    setIsOpen(true);
  };

  return (
    <div>
      <span className="font-mono text-slate-900 p-4 m-4 text-6xl flex justify-center">
        My Liked Products
      </span>
      <span className="font-mono text-center text-slate-900 p-4 m-4 text-1xl flex justify-center">
        Here are all your liked products!
        <br />
        Click on a product to learn more, or remove it by clicking the cross.
      </span>

      <div className="grid grid-cols-3 gap-6 p-4 m-4">
        {likedList.map((product: ProductDetail, i: number): JSX.Element => {
          return (
            <DetailsCard
              key={i}
              makeupDetailData={product}
              onClick={() => handleCardClick(product)}
            />
          );
        })}
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {currentProduct ? (
          <DetailsModalContent currentProduct={currentProduct} />
        ) : (
          "no product selected"
        )}
      </Modal>
    </div>
  );
};
export default LikedProducts;
