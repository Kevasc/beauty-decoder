import { ProductDetail } from "@/api/api";

interface DetailsCardProps {
  makeupDetailData: ProductDetail;
}

export const DetailsCard = ({ makeupDetailData }: DetailsCardProps) => {
  return (
    <div className="border h-500 w-500 text-center  font-mono text-black-500 bg-white hover:bg-purple-50 rounded-lg hover:border-fuchsia-900 shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-4">
      {makeupDetailData.name}

      {makeupDetailData.image_link ? (
        <img
          width={100}
          height={100}
          src={makeupDetailData.api_featured_image}
          alt={`${makeupDetailData.name}`}
          className="mx-auto "
        />
      ) : (
        <div className="text-center font-bold text-gray-500">
          {makeupDetailData.name}
        </div>
      )}
      <div>
        <p>
          {makeupDetailData.brand?.charAt(0).toUpperCase() +
            makeupDetailData.brand?.slice(1) || "Brand not available"}
        </p>
      </div>
      <div>
        <p>{makeupDetailData.price}</p>
      </div>
    </div>
  );
};
