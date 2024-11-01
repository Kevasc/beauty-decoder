"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Blush from "../img/Blush.png";
import Bronzer from "../img/Bronzer.png";
import Eyebrow from "../img/Eyebrow.png";
import Eyeliner from "../img/Eyeliner.png";
import Eyeshadow from "../img/Eyeshadow.png";
import Foundation from "../img/Foundation.png";
import LipLiner from "../img/LipLiner.png";
import Lipstick from "../img/Lipstick.png";
import Mascara from "../img/Mascara.png";
import NailPolish from "../img/NailPolish.png";

type Product = {
  name: string;
  img: StaticImageData;
  color: string;
};

const staticProductArray: Product[] = [
  { name: "Blush", img: Blush, color: " #bc70a5" },
  { name: "Bronzer", img: Bronzer, color: "#e97b9b" },
  { name: "Eyebrow", img: Eyebrow, color: "#ff8f88" },
  { name: "Eyeliner", img: Eyeliner, color: "#ffad74" },
  { name: "Eyeshadow", img: Eyeshadow, color: "#ffd168" },
  { name: "Foundation", img: Foundation, color: "#bc70a5" },
  { name: "Lip Liner", img: LipLiner, color: "#e97b9b" },
  { name: "Lipstick", img: Lipstick, color: "#ff8f88" },
  { name: "Mascara", img: Mascara, color: "#ffad74" },
  { name: "Nail Polish", img: NailPolish, color: "#ffd168" },
];

const Decoder: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(staticProductArray);
  const [apiData, setApiData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        if (response.ok) {
          const data = await response.json();
          // Process and map API data to the Product type
          const apiProducts = data.map((item: any) => ({
            name: item.name,
            color: item.color || "#ff8f88", // default color if none
          }));
          setApiData(apiProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const productCards = [...products, ...apiData].map((product, index) => (
    <div
      key={index}
      className="shadow-lg transition-transform transform hover:scale-105"
      style={{ backgroundColor: product.color }}
    >
      <div className="bg-white p-3 flex justify-center">
        {product.img ? (
          <Image width={100} src={product.img} alt={product.name} />
        ) : (
          <div className="text-center font-bold text-black-500">
            {product.name}
          </div>
        )}
      </div>
      <div className="py-5 flex justify-center">
        <p className="font-mono text-2xl">{product.name}</p>
      </div>
    </div>
  ));

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bebas text-3xl font-bold text-purple-main mt-5">
          BEAUTY
        </h1>
        <p className="font-bebas text-3xl font-bold text-purple-main">
          DECODER
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10">
        {productCards}
      </div>
    </div>
  );
};

export default Decoder;
