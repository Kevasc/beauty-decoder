import { ProductDetail } from "@/api/api";
import { Tooltip } from "react-tooltip";
import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import {
  addToLikedList,
  removeFromLikedList,
} from "@/redux/likedProductsSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";

interface DetailsModalContentProps {
  currentProduct: ProductDetail;
}

const DetailsModalContent = ({ currentProduct }: DetailsModalContentProps) => {
  const colorSwatch = currentProduct.product_colors.map((color) => {
    return (
      <div key={color.hex_value} className="flex p-2 items-center">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={color.colour_name}
          className="min-h-10 min-w-10 border mr-2 rounded-full"
          style={{ backgroundColor: color.hex_value }}
        />
      </div>
    );
  });
  const tooltip = <Tooltip id="my-tooltip" />;
  //useSelector pulls the data out from the redux store and displays it, but does not add or remove it from anywhere
  const likedList: ProductDetail[] = useSelector((state: RootState) => {
    return state.likedProducts.list;
  });
  // in the next line i will check if likedList contains the current products
  const isProductInLikedList: boolean = likedList.includes(currentProduct);
  // Format dates using Luxon
  const updatedAt = DateTime.fromISO(currentProduct.updated_at).toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY
  );
  const creationDate = currentProduct.created_at
    ? DateTime.fromISO(currentProduct.created_at).toLocaleString(
        DateTime.DATETIME_MED_WITH_WEEKDAY
      )
    : null;

  const dispatch = useDispatch();

  return (
    <div className="text-gray-900 flex-col justify-center text-center items-center bg-white pt-4 rounded-lg max-h-[60vh] overflow-auto mb-20">
      <div className="w-full flex justify-center mb-4">
        <div className="bg-purple-50 rounded-full w-fit px-8 py-4  self-center">
          <h3 className="text-3xl font-semibold">
            {currentProduct.brand?.toUpperCase() || "Brand not available"}
          </h3>
        </div>
      </div>
      {currentProduct.image_link && (
        <img
          height={250}
          width={250}
          src={currentProduct.api_featured_image}
          alt={currentProduct.name || "product image"}
          className="my-3 mx-auto"
        />
      )}
      <div className="items-center gap-4 flex flex-col">
        <p className="font-semibold p-3 mt-3">{currentProduct.name}</p>
        <p className="p-5">
          {currentProduct?.description || "No description available."}
        </p>
        <div className="flex flex-wrap justify-center p-4 m-4 bg-stone-100 rounded-full text-sm">
          <span className="flex justify-center items-center">
            Colours available:
          </span>
          {colorSwatch || "no swatches available"}
        </div>
        <div className="flex flex-wrap justify-center p-4 m-4 bg-stone-100 rounded-full text-sm">
          Filters: {currentProduct.tag_list.join(", ") || "No filters"}
        </div>
        <div className="flex flex-col p-3 items-center gap-y-2">
          <p>Last Updated: {updatedAt}</p>
          {creationDate && <p>Created On: {creationDate}</p>}
        </div>
      </div>
      <div className="flex items-center justify-center p-2 bottom-0 absolute w-full bg-white border-t">
        <button
          className="bg-button-primary text-white active:bg-purple-900 font-bold uppercase text-sm px-6 py-3 rounded  mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <Link href={currentProduct.website_link} target="_blank">
            Buy
          </Link>
        </button>
        <button
          className="bg-button-primary text-white active:bg-purple-900 font-bold uppercase text-sm px-6 py-3 rounded mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            //check if currentProduct is already in list using isProductInLikedList
            if (isProductInLikedList === true) {
              //remove from list/stroe
              dispatch(removeFromLikedList(currentProduct.id));
            } else {
              //add to list/ store
              dispatch(addToLikedList(currentProduct));
            }
          }}
          // isProductInLikedList is a boolean, so the condiontal is checking if has been liked, which changes the button to liked if it has, or sets it to like if not
        >
          {isProductInLikedList === true ? "liked!" : "like"}
        </button>
      </div>
      {tooltip}
    </div>
  );
};
export default DetailsModalContent;
