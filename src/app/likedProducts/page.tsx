"use client";
import { ProductDetail } from "@/api/api";
import { DetailsCard } from "@/components/DetailsCard";
import React from "react";
import { useSelector } from "react-redux";

const LikedProducts: React.FC = () => {
  const likedList: ProductDetail[] = useSelector((state: any) => {
    return state.likedProducts.list;
  });
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      {likedList.map((product: ProductDetail, i: number): JSX.Element => {
        return <DetailsCard key={i} makeupDetailData={product} />;
      })}
    </div>
  );
};
export default LikedProducts;
