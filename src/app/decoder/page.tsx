"use client";

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
import Modal from "@/components/Modal";
import DetailsModalContent from "@/components/DetailsModalContent";
import Image from "next/image";
import logo from "../img/logo-cropped.png";

export type Product = {
  name: string;
  img: StaticImageData;
};

const staticCategoryArray: Product[] = [
  { name: "Blush", img: Blush },
  { name: "Bronzer", img: Bronzer },
  { name: "Eyebrow", img: Eyebrow },
  { name: "Eyeliner", img: Eyeliner },
  { name: "Eyeshadow", img: Eyeshadow },
  { name: "Foundation", img: Foundation },
  { name: "Lip Liner", img: LipLiner },
  { name: "Lipstick", img: Lipstick },
  { name: "Mascara", img: Mascara },
  { name: "Nail Polish", img: NailPolish },
];

//The React.FC type annotation specifies that it is a React functional component
const Decoder: React.FC = () => {
  // this initializes as an empty array. The state can hold either an array of ProductDetail, an empty array, or undefined
  const [productDetailsList, setProductDetailsList] = useState<
    ProductDetail[] | [] | undefined
  >([]);
  const [currentProduct, setCurrentProduct] = useState<ProductDetail | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  //the productCards variable is an array of productCards created by mapping over staticCatergoryArray and returns a product card for each item
  const productCards = staticCategoryArray.map((product, i) => {
    return (
      //productCard gets data from the seperate component page, ProductCard
      <ProductCard
        //A unique key for React's reconciliation process using index(i)
        key={i}
        //Passing the current product object to the ProductCard
        product={product}
        //An inline function that calls getProductsApi with the product's name when the card is clicked
        onClick={() => {
          getProductsApi(product.name);
        }}
      />
    );
  });
  //the question mark checks if productDetailsList (an array of product data) exists. If it does, it maps over each product in the list
  const specificProducts: JSX.Element[] | undefined = productDetailsList?.map(
    //For each product, it returns a DetailsCard component, passing in makeupDetailData (containing details about that specific product).
    (product: ProductDetail, i: number): JSX.Element => {
      //Returns a JSX element for each product
      //The key attribute is set to i, the index of the product, ensuring each element is uniquely identifiable.
      return (
        <DetailsCard
          key={i}
          makeupDetailData={product}
          onClick={() => {
            setCurrentProduct(product);
            setIsOpen(true);
          }}
        />
      );
    }
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="container flex flex-col items-center justify-center m-5 ">
        <Image data-testid="logo" src={logo} alt="logo" width={250} />
      </div>
      <div className="grid m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10">
        {productCards}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10">
        {specificProducts !== undefined && specificProducts.length > 0
          ? specificProducts
          : "Click a category to learn more"}
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

export default Decoder;
