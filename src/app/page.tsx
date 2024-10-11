import Image from "next/image";
import Shelfie from "../app/img/Shelfie.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bebas text-9xl font-bold  mt-5">BEAUTY</h1>
        <p className="font-bebas text-9xl font-bold ">DECODER</p>
        <p className="font-bebas text-2xl font-normal flex items-center m-2 mt-4  justify-center ">
          A simple cosmetics ingredients comparison website
        </p>
        <Image src={Shelfie} alt="Shelfie with no brands" />
      </div>
    </div>
  );
};

export default Homepage;
