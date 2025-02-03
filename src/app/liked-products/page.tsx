"use client";
import { ProductDetail } from "@/api/api";
import { DetailsCard } from "@/components/DetailsCard";
import DetailsModalContent from "@/components/DetailsModalContent";
import Modal from "@/components/Modal";
import { RootState } from "@/redux/likedProductsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const LikedProducts: React.FC = () => {
  const likedList = useSelector((state: RootState) => state.likedProducts.list);
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
      <span className="font-mono text-slate-900 p-2 m-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center">
        My Liked Products
      </span>
      <span className="font-mono text-center text-slate-900 p-2 m-2 text-1xl flex justify-center">
        Here are all your liked products!
        <br />
        Click on a product to learn more, or remove it using the bin.
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 m-4">
        {likedList && likedList.length > 0 ? (
          likedList.map((product: ProductDetail, i: number) => (
            <DetailsCard
              key={i}
              makeupDetailData={product}
              onClick={() => handleCardClick(product)}
            />
          ))
        ) : (
          <div className="col-span-full text-center pt-10 text-gray-500">
            <p>No products currently liked.</p>
          </div>
        )}
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
