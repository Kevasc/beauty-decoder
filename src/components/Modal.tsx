import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-scroll font-mono max-h-overflow-y-auto fixed w-full inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col max-w-3xl bg-white outline-none focus:outline-none justify-center items-center">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span
                  className="bg-transparent text-pink-400 
                    h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
              {children}
            </div>
          </div>
          {/* this is not an empty div! it sets the background to a darker color when a product is opened and makes the modal pop  */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
