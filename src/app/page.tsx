import Image from "next/image";
import Shelfie from "./img/Shelfie.jpg";

const Homepage = () => {
  return (
    <div data-testid="homepage_container">
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1
          data-testid="heading_top_line"
          className="font-bebas text-9xl font-bold  mt-5"
        >
          BEAUTY
        </h1>
        <p
          data-testid="heading_bottom_line"
          className="font-bebas text-9xl font-bold "
        >
          DECODER
        </p>
        <p
          data-testid="homepage_description"
          className="font-bebas text-2xl font-normal flex items-center m-2 mt-4  justify-center "
        >
          A simple cosmetics ingredients comparison website
        </p>
        <Image
          data-testid="main_image"
          src={Shelfie}
          alt="Shelfie with no brands"
        />
      </div>
    </div>
  );
};

export default Homepage;
