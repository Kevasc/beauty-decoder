import { ProductDetail } from "@/api/api";

interface DetailsCardProps {
  makeupDetailData: ProductDetail;
}

export const DetailsCard = ({ makeupDetailData }: DetailsCardProps) => {
  return (
    <div className="border h-500 w-500 text-center font-bold text-black-500 bg-zinc-50 shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      {makeupDetailData.brand}

      {makeupDetailData.api_featured_image ? (
        <img
          width={100}
          height={100}
          src={makeupDetailData.image_link}
          alt={makeupDetailData.name}
        />
      ) : (
        <div className="text-center font-bold text-black-500">
          {makeupDetailData.name}
        </div>
      )}
    </div>
  );
};
