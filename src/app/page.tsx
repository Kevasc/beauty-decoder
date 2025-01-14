"use client";
import Typewriter from "typewriter-effect";
import { AwesomeButton } from "react-awesome-button";

const Buttons = () => {
  return (
    <div className="flex gap-4 mt-6">
      <AwesomeButton
        type="primary"
        className="!bg-button-primary !text-button-primary-light !shadow-hover-pressure !text-lg !rounded-11 !transition-transform !duration-transform-speed hover:!bg-button-primary-hover active:!bg-button-primary-active"
      >
        Decode
      </AwesomeButton>
      <AwesomeButton
        type="primary"
        className="!bg-button-primary !text-button-primary-light !text-lg !rounded-11 !shadow-raise !transition-transform !duration-transform-speed hover:!bg-button-primary-hover active:!bg-button-primary-active"
      >
        About
      </AwesomeButton>
      <AwesomeButton
        type="primary"
        className="!bg-button-primary !text-button-primary-light !text-lg !rounded-11 !shadow-raise !transition-transform !duration-transform-speed hover:!bg-button-primary-hover active:!bg-button-primary-active"
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
                  "A Simple Way to Filter the Beauty Products you LOVE."
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
