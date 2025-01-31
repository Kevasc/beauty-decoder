"use client";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col font-mono text-slate-900 items-center justify-center">
      <span className="w-full flex justify-center p-2 m-2 text-7xl">
        About me
      </span>
      <span className="text-center m-3 p-3">
        Hi, I&apos;m Jordan! <br />
        <br />
        As a beauty enthusiast, I understand how important it is to find
        products that align with specific ingredient concerns and allergen
        sensitivities. <br />
        That’s why I created a website that allows users to filter beauty
        products based on their unique needs. I discovered the {""}
        <a
          href="https://makeup-api.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          Makeup API
        </a>
        , which, while not the most up-to-date, serves as a great starting point
        for testing this concept in a real-world setting.
        <br /> My goal is to build a user-friendly platform that makes it easier
        for people to discover beauty products that truly work for them. <br />
        <br /> If you have any thoughts or feedback, I&apos;d love to hear them!
        <br /> You can connect with me on LinkedIn, and if you&apos;re
        interested in seeing how I brought this project to life, check out my
        GitHub.
      </span>
      <div className="flex w-full justify-center m-4 gap-10">
        <AwesomeButtonSocial
          className="w-44"
          type="github"
          href="https://github.com/Kevasc"
        >
          GitHub
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          className="w-44"
          type="linkedin"
          href="https://www.linkedin.com/in/kevasjordancole/"
        >
          LinkedIn
        </AwesomeButtonSocial>
      </div>
    </div>
  );
};
export default Contact;
