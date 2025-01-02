import { ProductDetail } from "@/api/api";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { DateTime } from "luxon";

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
        <ReactTooltip place="top" effect="solid" id="my-tooltip" />
      </div>
    );
  });

  // Format dates using Luxon
  const updatedAt = DateTime.fromISO(currentProduct.updated_at).toLocaleString(
    DateTime.DATETIME_MED_WITH_WEEKDAY
  );
  // Example for creation date (if available)
  const creationDate = currentProduct.created_at
    ? DateTime.fromISO(currentProduct.created_at).toLocaleString(
        DateTime.DATETIME_MED_WITH_WEEKDAY
      )
    : null;

  //make a like list

  return (
    <div className=" text-gray-900 flex-col items-center bg-white rounded-lg max-h-[60vh] overflow-y-auto">
      <h3 className="text-3xl flex justify-center font-semibold">
        {currentProduct.brand}
      </h3>

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
        <p className="font-semibold">{currentProduct.name}</p>
        <p className="p-5">
          {currentProduct?.description || "No description available."}
        </p>
        <div className="flex flex-wrap justify-center">{colorSwatch}</div>

        <div className="flex flex-col p-3 items-center gap-y-2">
          <p>tags {currentProduct.product_tags}</p>
          <p>Last Updated: {updatedAt}</p>
          {creationDate && <p>Created On: {creationDate}</p>}
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-6 relative  bottom-4">
        <button
          className="bg-pink-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg  mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <a href={currentProduct.website_link} target="_blank">
            Buy
          </a>
        </button>
        <button
          className="bg-pink-500 text-white active:bg-emerald-600 font-bold  uppercase text-sm px-6 py-3 rounded hover:shadow-lg   mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          // onClick={() => setIsOpen(false)}
        >
          like
        </button>
      </div>
    </div>
  );
};
export default DetailsModalContent;
