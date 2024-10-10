"use client";

import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#000000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 2.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#000000",
    padding: "1em",
    fontSize: "1.5em",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span>
      <Menu
        styles={styles}
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item"
          id="home"
        >
          Home
        </Link>
        <Link
          href="/decoder"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item"
          id="decoder"
        >
          Decoder
        </Link>
        <Link
          href="/about"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item"
          id="about"
        >
          About
        </Link>
      </Menu>
    </span>
  );
};

export default NavBar;
