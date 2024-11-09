import Image from "next/image";
import MakeupProducts from "./img/MakeupProducts.png";

const Homepage = () => {
  return (
    <div
      data-testid="homepage_container"
      className="min-h-screen flex flex-col items-center justify-center "
    >
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1
          data-testid="heading_top_line"
          className="font-bebas text-9xl text-fuchsia-900 font-bold mt-5"
        >
          BEAUTY
        </h1>
        <p
          data-testid="heading_bottom_line"
          className="font-bebas text-9xl text-fuchsia-900 font-bold "
        >
          DECODER
        </p>
        <p
          data-testid="homepage_description"
          className="font-mono text-2xl font-normal text-neutral-900 flex items-center m-2 mt-4  justify-center "
        >
          A simple cosmetics ingredients comparison website
        </p>
        <Image
          data-testid="main_image"
          src={MakeupProducts}
          alt="Makeup smear"
        />
      </div>
    </div>
  );
};

export default Homepage;
