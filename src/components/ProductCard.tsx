import { Product } from "@/app/decoder/page";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      className="shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-3 bg-white rounded-lg border border-transparent hover:border-fuchsia-900"
      style={{ backgroundColor: product.color }}
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
