"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import purpleLogo from "../app/img/purple-logo.png";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className="flex gap-4 font-mono mt-6">
      <Link
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
        href="/decoder"
      >
        Decode
      </Link>
      <Link
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
        href="/about"
      >
        Contact
      </Link>
      <Link
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
        href="/likedProducts"
      >
        My Products
      </Link>
    </div>
  );
};

const Homepage = () => {
  return (
    <div
      data-testid="homepage_container"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center mx-auto">
        <Image
          src={purpleLogo}
          width={700}
          height={700}
          alt="purple logo"
        ></Image>
        <div className="font-mono text-2xl font-normal text-neutral-900 flex items-center h-16 p-4 m-2 justify-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "A simple way to filter the beauty products you love."
                )
                .start();
            }}
            options={{
              delay: 50,
            }}
          />
        </div>

        <Buttons />
      </div>
    </div>
  );
};

export default Homepage;
