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
  { name: "Blush", img: Blush },
  { name: "Bronzer", img: Bronzer },
  { name: "Eyebrow", img: Eyebrow },
  { name: "Eyeliner", img: Eyeliner },
  { name: "Eyeshadow", img: Eyeshadow },
  { name: "Foundation", img: Foundation },
  { name: "Lip Liner", img: LipLiner },
  { name: "Lipstick", img: Lipstick },
  { name: "Mascara", img: Mascara },
  { name: "Nail Polish", img: NailPolish },
];

const Decoder = () => {
  const productCards = productTypeArray.map((product, index) => {
    return (
      <div
        key={index}
        className="shadow-lg rounded transition-transform transform hover:scale-105 bg-pink-300"
      >
        <div className="bg-white p-3 flex rounded justify-center">
          <Image width={100} src={product.img} alt={product.name} />
        </div>
        <div className="py-5 flex justify-center ">
          <p className="font-bold text-2xl ">{product.name}</p>
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
      <div className="grid grid-cols-5  gap-10 p-10">{productCards}</div>
    </div>
  );
};
export default Decoder;
