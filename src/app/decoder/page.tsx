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
import { getProducts, ProductDetail } from "@/api/api";
import { ProductCard } from "@/components/ProductCard";
import { DetailsCard } from "@/components/DetailsCard";
import Modal from "@/components/Modal";
import DetailsModalContent from "@/components/DetailsModalContent";
import FilterGridMosaic from "@/components/FilterCards";
import { SelectedFilters } from "@/components/SelectedFilters";
import SpinnerLoading from "@/components/SpinnerLoader";
import { useRef } from "react";

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
  >(undefined);
  const [currentProduct, setCurrentProduct] = useState<ProductDetail | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFiltersList, setSelectedFiltersList] = useState<string[]>([]);
  const [filtersPicked, setFiltersPicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  //The getProductsApi function is responsible for fetching product details from an API.
  const getProductsApi = async (productType: string) => {
    setIsLoading(true);
    //This line cleans the product type string by converting it to lowercase and replacing spaces with underscores, to format it for API calls without affecting how its displayed
    const cleanedProductType = productType.toLowerCase().replace(" ", "_");
    //calls the getProducts function with the cleaned product type and waits for the result. This contains product details.
    const apiResult = await getProducts(
      cleanedProductType,
      selectedFiltersList
    );
    apiResult?.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    //This updates the productDetailsList state with the fetched product details from the API
    setProductDetailsList(apiResult);
    setIsLoading(false);
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
          ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  const toggleFilter = (filter: string) => {
    setSelectedFiltersList(
      (prev) =>
        prev.includes(filter)
          ? prev.filter((f) => f !== filter) // Remove filter if already selected
          : [...prev, filter] // Add filter if not selected
    );
  };

  return (
    <div>
      <div className="flex justify-center rounded-sm ">
        <SelectedFilters
          selectedFilters={selectedFiltersList}
          toggleFilter={toggleFilter}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {filtersPicked === false ? (
          <div className="flex flex-row items-center p-10">
            <FilterGridMosaic
              selectedFilters={selectedFiltersList}
              toggleFilter={toggleFilter}
            />
            <button
              className="bg-purple-800 text-white hover:bg-purple-900 h-40 w-40 m-3 ml-14 font-mono flex justify-center items-center font-bold rounded-full cursor-pointer"
              type="button"
              onClick={() => setFiltersPicked(true)}
            >
              <span>GO</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-row items-center">
              <div className="grid m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-5 flex-grow">
                {productCards}
              </div>
              <button
                className="bg-purple-800 text-white hover:bg-purple-900 h-40 w-40 m-1 font-mono flex justify-center items-center font-bold rounded-full cursor-pointer"
                type="button"
                onClick={() => setFiltersPicked(false)}
              >
                <span>BACK</span>
              </button>
            </div>
            {isLoading === true ? (
              <div className="h-[100rem]" ref={ref} id="spinnerLoading">
                <SpinnerLoading />
              </div>
            ) : null}
            {productDetailsList !== undefined ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 min-h-[100rem]">
                {specificProducts !== undefined &&
                specificProducts.length > 0 ? (
                  specificProducts
                ) : (
                  <div className="col-span-full text-center text-gray-500">
                    <p>
                      No products match your selected filters. Please adjust
                      your filters and try again.
                    </p>
                  </div>
                )}
              </div>
            ) : null}

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              {currentProduct ? (
                <DetailsModalContent currentProduct={currentProduct} />
              ) : (
                "no product selected"
              )}
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Decoder;
