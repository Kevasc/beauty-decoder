"use client";
import Typewriter from "typewriter-effect";
import { AwesomeButton } from "react-awesome-button";

const Buttons = () => {
  return (
    <div className="flex gap-4 font-mono mt-6">
      <AwesomeButton
        type="primary"
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary "
      >
        Decode
      </AwesomeButton>
      <AwesomeButton
        type="primary"
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
      >
        About
      </AwesomeButton>
      <AwesomeButton
        type="primary"
        className="bg-button-primary-light flex border-2 justify-center items-center p-10 text-lg rounded-md h-16 w-52 hover:bg-button-primary-dark hover:border-2 hover:border-fuchsia-900 active:bg-button-primary"
      >
        Contact
      </AwesomeButton>
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
        <h1
          data-testid="heading_top_line"
          className="font-bebas text-9xl text-fuchsia-900 font-bold"
        >
          BEAUTY
        </h1>
        <p
          data-testid="heading_bottom_line"
          className="font-bebas text-9xl text-fuchsia-900 font-bold"
        >
          DECODER
        </p>

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
