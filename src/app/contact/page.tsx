"use client";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Contact: React.FC = () => {
  return (
    <div className="font-bebas flex flex-col items-center justify-center">
      <div className="flex w-full justify-center gap-10">
        <AwesomeButtonSocial type="github" href="https://github.com/Kevasc">
          GitHub
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
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
