import React from "react";
interface LikeItem {
  id: number;
  name: string;
}
const likeList: LikeItem[] = [];
const LikedProducts: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <ul>
        {likeList.length > 0 ? (
          likeList.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No liked products yet.</li>
        )}
      </ul>
    </div>
  );
};
export default LikedProducts;
