"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import purpleLogo from "../app/img/purple-logo.png";
import Link from "next/link";

const Homepage = () => {
  return (
    <div
      data-testid="homepage_container"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex w-full justify-end">
        <button
          className=" hover:text-button-primary-active text-slate-900 font-mono py-2 px-4 rounded-full"
          type="button"
        >
          Sign up
        </button>
        <button
          className=" bg-button-primary-active hover:text-white font-mono py-2 px-4 mx-3 rounded-full"
          type="button"
        >
          Login
        </button>
      </div>
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
      </div>
    </div>
  );
};

export default Homepage;
