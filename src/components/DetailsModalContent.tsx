import { ProductDetail } from "@/api/api";

interface DetailsModalContentProps {
  currentProduct: ProductDetail;
}

const DetailsModalContent = ({ currentProduct }: DetailsModalContentProps) => {
  const colorSwatch = currentProduct.product_colors.map((color, i) => {
    return (
      <div
        key={i}
        className={"flex h-10 w-10 border"}
        style={{ backgroundColor: color.hex_value }}
      ></div>
    );
  });
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
        {colorSwatch}
        <p>{currentProduct.updated_at}</p>
      </div>
    </div>
  );
};
export default DetailsModalContent;
