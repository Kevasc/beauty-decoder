import Image from "next/image";
import Shelfie from "../app/img/Shelfie.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="container flex flex-col items-center justify-center mt-52 h-80 mx-auto my-4 p-4 ">
        <h1 className="font-bebas text-9xl font-bold tracking-widest">
          BEAUTY
        </h1>
        <p className="font-bebas text-9xl font-bold tracking-widest">DECODER</p>

        <Image src={Shelfie} alt="Shelfie with no brands" />
        {/* <p className="font-bebas text-2xl font-normal flex items-center m-2 justify-center ">
          A simple skincare ingredients comparison website
        </p> */}
      </div>
    </div>
  );
};

export default Homepage;
