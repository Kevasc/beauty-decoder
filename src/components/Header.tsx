import React from "react";
import Image from "next/image";
import purpleLogo from "../app/img/purple-logo.png";

const Header = () => {
  return (
    <header className="flex justify-center">
      <Image
        src={purpleLogo}
        width={200}
        height={150}
        alt="purple logo"
      ></Image>
    </header>
  );
};

export default Header;
