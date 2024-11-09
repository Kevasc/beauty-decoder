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
import { DetailsCard } from "@/components/DetailsCard";

export type Product = {
  name: string;
  img: StaticImageData;
  color: string;
};

const staticCategoryArray: Product[] = [
  { name: "Blush", img: Blush, color: "#bc70a5" },
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
  const [productDetailsList, setProductDetailsList] = useState<
    ProductDetail[] | [] | undefined
  >([]);

  //The getProductsApi function is responsible for fetching product details from an API.
  const getProductsApi = async (productType: string) => {
    //This line cleans the product type string by converting it to lowercase and replacing spaces with underscores, to format it for API calls withought affecting how its displayed
    const cleanedProductType = productType.toLowerCase().replace(" ", "_");
    //calls the getProducts function with the cleaned product type and waits for the result. This contains product details.
    const apiResult = await getProducts(cleanedProductType);
    apiResult?.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    //This updates the productDetailsList state with the fetched product details from the API
    setProductDetailsList(apiResult);
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
  //the question mark checks if productDetailsList (an array of product data) exists. If it does, it maps over each product in the list
  const specificProducts: JSX.Element[] | undefined = productDetailsList?.map(
    //For each product, it returns a DetailsCard component, passing in makeupDetailData (containing details about that specific product).
    (product: ProductDetail, i: number): JSX.Element => {
      //Returns a JSX element for each product
      //The key attribute is set to i, the index of the product, ensuring each element is uniquely identifiable.
      return <DetailsCard key={i} makeupDetailData={product} />;
    }
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center mx-auto ">
        <h1 className="font-bebas text-3xl font-bold  text-fuchsia-900 mt-5">
          BEAUTY DECODER
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10">
        {productCards}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10">
        {specificProducts !== undefined && specificProducts.length > 0
          ? specificProducts
          : "Data is not here"}
      </div>
    </div>
  );
};

export default Decoder;
