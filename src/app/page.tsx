"use client";
import Typewriter from "typewriter-effect";

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

        <div className="font-mono text-2xl font-normal text-neutral-900 flex items-center m-2 mt-4 justify-center">
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
      </div>
    </div>
  );
};

export default Homepage;
