"use client";
//The useState hook allows functional components to manage local state
import React, { useState } from "react";
import { StaticImageData } from "next/image";
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
import { getProducts } from "@/api/api";
import { ProductDetail } from "@/api/api";
import { ProductCard } from "@/components/ProductCard";

export type Product = {
  name: string;
  img: StaticImageData;
  color: string;
};

const staticCategoryArray: Product[] = [
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
//The React.FC type annotation specifies that it is a React functional component
const Decoder: React.FC = () => {

  // this initializes as an empty array. The state can hold either an array of ProductDetail, an empty array, or undefined
  const [productDetailsList, setProductDetailsList] = useState<ProductDetail[] | [] | undefined>([]);

  //The getProductsApi function is responsible for fetching product details from an API.
  const getProductsApi = async (productType: string) => {
    //This line cleans the product type string by converting it to lowercase and replacing spaces with underscores, to format it for API calls withought affecting how its displayed
    const cleanedProductType = productType.toLowerCase().replace(" ", "_");
    //calls the getProducts function with the cleaned product type and waits for the result. This contains product details.
    const apiResult = await getProducts(cleanedProductType)
    //This updates the productDetailsList state with the fetched product details from the API
    setProductDetailsList(apiResult)
  };

  //the productCards variable by mapping over staticCatergoryArray and returns a product card for each item
  const productCards = staticCategoryArray.map((product, i) => {
    return (
      //productCard gets data from the seperate component page, ProductCard
      <ProductCard
        //A unique key for React's reconciliation process using index(i)
        key={i}
        //Passing the current product object to the ProductCard
        product={product}
        //An inline function that calls getProductsApi with the product's name when the card is clicked
        onClick={() => getProductsApi(product.name)}
      />
    );
  });

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
      <div>
        {productDetailsList !== undefined && productDetailsList.length > 0 ? "Data is here" : "Data is not here"}
      </div>
    </div>
  );
};

export default Decoder;
