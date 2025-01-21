import React from "react";
import Image from "next/image";
import Link from "next/link";
import purpleLogo from "../app/img/purple-logo.png";

const Header = () => {
  return (
    <header className="flex justify-center">
      <Link href={"/"}>
        <Image
          src={purpleLogo}
          width={200}
          height={150}
          alt="purple logo"
        ></Image>
      </Link>
    </header>
  );
};

export default Header;
