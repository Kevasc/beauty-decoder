"use client";

import Image from "next/image";
import Blush from "../img/Blush.png";
import Bronzer from "../img/Bronzer.png";
import Eyebrow from "../img/Eyebrow.png";
import Eyeliner from "../img/Eyeliner.png";
import Eyeshadow from "../img/Eyeshadow.png";
import Foundation from "../img/Foundation.png";
import LipLiner from "../img/LipLiner.png";
import Lipstick from "../img/Lipstick.png";
import Mascara from "../img/Mascara.png";
import NailPolish from "../img/NailPolish.png";

const productTypeArray = [
  { name: "Blush", img: Blush, color: "#F58F29" },
  { name: "Bronzer", img: Bronzer, color: "#712f79" },
  { name: "Eyebrow", img: Eyebrow, color: "#4C4C9D" },
  { name: "Eyeliner", img: Eyeliner, color: "#5BC0BE" },
  { name: "Eyeshadow", img: Eyeshadow, color: "#EE4266" },
  { name: "Foundation", img: Foundation, color: "#EE4266" },
  { name: "Lip Liner", img: LipLiner, color: "#5BC0BE" },
  { name: "Lipstick", img: Lipstick, color: "#4C4C9D" },
  { name: "Mascara", img: Mascara, color: "#712f79" },
  { name: "Nail Polish", img: NailPolish, color: "#F58F29" },
];

const Decoder = () => {
  const productCards = productTypeArray.map((product, index) => {
    return (
      <div
        key={index}
        className="shadow-lg rounded transition-transform transform hover:scale-105"
        style={{ backgroundColor: product.color }}
      >
        <div className="bg-white p-3 flex rounded justify-center">
          <Image width={100} src={product.img} alt={product.name} />
        </div>
        <div className="py-5 flex justify-center ">
          <p className="font-bebas text-2xl ">{product.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bebas text-3xl font-bold  mt-5">BEAUTY</h1>
        <p className="font-bebas text-3xl font-bold ">DECODER</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 ">
        {productCards}
      </div>
    </div>
  );
};
export default Decoder;
