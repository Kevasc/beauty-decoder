import { ProductDetail } from "@/api/api";

interface DetailsCardProps {
  makeupDetailData: ProductDetail;
}

export const DetailsCard = ({ makeupDetailData }: DetailsCardProps) => {
  const brandLowerCase =
    makeupDetailData.brand?.toLowerCase() || "Brand not available";
  const brandFirstLetter = brandLowerCase.charAt(0).toUpperCase();
  const brandFinalForm = brandFirstLetter + brandLowerCase.slice(1);

  return (
    <div className="border p-5 text-center font-mono text-black-500 bg-white hover:bg-purple-50 rounded-lg hover:border-fuchsia-900 shadow-lg transition-transform transform hover:scale-105 cursor-pointer ">
      {makeupDetailData.image_link && (
        <img
          height={100}
          src={makeupDetailData.api_featured_image}
          alt={makeupDetailData.name}
          className="my-3 mx-auto "
        />
      )}
      <p>{brandFinalForm}</p>
      <div>
        <p className="p-3">
          {makeupDetailData.name?.replaceAll(";", "")
            ? makeupDetailData.name?.charAt(0).toUpperCase() +
              makeupDetailData.name?.slice(1)
            : "name"}
        </p>
      </div>
      <div>
        <p className="p-3">
          {makeupDetailData.price && parseInt(makeupDetailData.price)
            ? `£${makeupDetailData.price}`
            : "N/A"}
        </p>
      </div>
    </div>
  );
};
