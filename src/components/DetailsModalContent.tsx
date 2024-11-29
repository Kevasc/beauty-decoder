import { ProductDetail } from "@/api/api";
import { Tooltip as ReactTooltip } from "react-tooltip";
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

  //make a like list
  console.log("color swatch", colorSwatch);
  return (
    <div className="p-4 size-auto text-gray-900">
      {currentProduct.image_link && (
        <img
          height={250}
          width={250}
          src={currentProduct.api_featured_image}
          alt={currentProduct.name || "product image"}
          className="my-3 mx-auto"
        />
      )}
      <div className="">
        <p>{currentProduct.brand}</p>
        <p>{currentProduct.name}</p>
        <p>{currentProduct?.description || "No description available."}</p>
        <div className="grid ">{colorSwatch}</div>
        <p>{currentProduct.updated_at}</p>
      </div>
    </div>
  );
};
export default DetailsModalContent;
