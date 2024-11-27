import { ProductDetail } from "@/api/api";

interface DetailsModalContentProps {
  currentProduct: ProductDetail | null;
}

const DetailsModalContent = ({ currentProduct }: DetailsModalContentProps) => {
  return (
    <div className="p-4 text-gray-700">
      <p>{currentProduct?.description || "No description available."}</p>
    </div>
  );
};
export default DetailsModalContent;
