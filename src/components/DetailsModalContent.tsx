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
    <div className="p-4 text-gray-900 flex-col items-center bg-white rounded-lg max-h-[60vh] overflow-y-auto">
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
        <p>{currentProduct.brand}</p>
        <p>{currentProduct.name}</p>
        <p>{currentProduct?.description || "No description available."}</p>
        <div className="flex flex-wrap justify-center">{colorSwatch}</div>

        <div className="flex flex-col p-3 items-center gap-y-2">
          <p>Last Updated: {updatedAt}</p>
          {creationDate && <p>Created On: {creationDate}</p>}
        </div>
      </div>
    </div>
  );
};
export default DetailsModalContent;
