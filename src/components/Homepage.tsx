import Image from "next/image";
import Shelfie from "../app/img/Shelfie.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-center mt-52 h-80 mx-auto my-4 p-4 ">
        <h1 className="font-bebas text-9xl font-bold tracking-widest mt-9">
          BEAUTY
        </h1>
        <p className="font-bebas text-9xl font-bold tracking-widest">DECODER</p>
        <p className="font-bebas text-2xl font-normal flex items-center m-2 mt-4 mb-9 justify-center ">
          A simple skincare ingredients comparison website
        </p>
        <Image src={Shelfie} alt="Shelfie with no brands" />
      </div>
    </div>
  );
};

export default Homepage;
