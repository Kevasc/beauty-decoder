import { ProductDetail } from "@/api/api";

interface DetailsCardProps {
  makeupDetailData: ProductDetail;
}

export const DetailsCard = ({ makeupDetailData }: DetailsCardProps) => {
  const brandUpperCase =
    makeupDetailData.brand?.toUpperCase() || "Brand not available";

  const nameLowerCase =
    makeupDetailData.name?.toLowerCase() || "Brand not available";
  const nameFirstLetter = nameLowerCase.charAt(0).toUpperCase();
  const nameFinalForm = nameFirstLetter + nameLowerCase.slice(1);

  return (
    <div className="border p-5 text-center font-mono text-black-500 bg-white hover:bg-purple-50 rounded-lg hover:border-fuchsia-900 shadow-lg transition-transform transform hover:scale-105 cursor-pointer ">
      {makeupDetailData.image_link && (
        <img
          height={150}
          width={150}
          src={makeupDetailData.api_featured_image}
          alt={makeupDetailData.name}
          className="my-3 mx-auto"
        />
      )}
      <div className="p-3 font-semibold">{brandUpperCase}</div>
      <div>
        <p className="p-3">{nameFinalForm}</p>
      </div>
      <div>
        <p className="p-3  font-semibold">
          {makeupDetailData.price && parseInt(makeupDetailData.price)
            ? `£${makeupDetailData.price}`
            : "N/A"}
        </p>
      </div>
    </div>
  );
};
