import { Product } from "@/app/decoder/page";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      className="shadow-lg transition-transform rounded-lg transform hover:scale-105 flex-shrink cursor-pointer p-2 border bg-purple-100 hover:bg-purple-50 hover:border-fuchsia-900"
      onClick={onClick}
    >
      <div className="bg-white p-3 flex justify-center">
        {product.img ? (
          <Image width={100} src={product.img} alt={product.name} />
        ) : (
          <div className="text-center font-bold text-black-500">
            {product.name}
          </div>
        )}
      </div>
      <div className="py-5 flex justify-center">
        <p className="font-mono text-2xl">{product.name}</p>
      </div>
    </div>
  );
};
