"use client";

const productTypeArray = [
  "Blush",
  "Bronzer",
  "Eyebrow",
  "Eyeliner",
  "Eyeshadow",
  "Foundation",
  "Lip Liner",
  "Lipstick",
  "Mascara",
  "Nail Polish",
];

const Decoder = () => {
  const productCards = productTypeArray.map((product, index) => {
    return (
      <div
        key={index}
        className="shadow-lg rounded transition-transform transform hover:scale-105"
      >
        {/* <img className="w-full h-48 object-cover rounded-t" src={`/img/${product.toLowerCase().replace(" ", "-")}.jpg`} alt={`${product}`} /> */}
        <div className="px-6 py-10 flex justify-center ">
          <p className="font-bold text-xl ">{product}</p>
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
