"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import purpleLogo from "../app/img/purple-logo.png";
import Link from "next/link";

const Homepage = () => {
  return (
    <div
      data-testid="homepage_container"
      className="min-h-screen flex flex-col items-center"
    >
      <div className="flex w-full justify-end gap-4 m-4 pt-4">
        <button
          className=" hover:text-button-primary-active border text-slate-900 font-mono py-2 px-4 rounded-full"
          type="button"
        >
          Sign up
        </button>
        <button
          className=" bg-button-primary-active hover:bg-purple-400 text-white font-mono py-2 px-4 mr-4 rounded-full"
          type="button"
        >
          Login
        </button>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <Image
          data-testid="home_logo"
          src={purpleLogo}
          width={700}
          height={700}
          alt="purple logo"
        ></Image>
        <div className="font-mono text-2xl font-normal text-neutral-900 flex items-center h-16 p-4 m-2 justify-center">
          <Typewriter
            data-testid="homepage_description"
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

        <div className="flex gap-4 font-mono mt-6 flex-wrap justify-center sm:pt-10 md:flex-nowrap">
          <Link
            data-testid="link_button_decode"
            className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
            href="/decoder"
          >
            Decode
          </Link>
          <Link
            data-testid="link_button_products"
            className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
            href="/liked-products"
          >
            My Products
          </Link>
          <Link
            data-testid="link_button_contact"
            className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
