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
    background: "#701a75",
  },
  bmBurgerBarsHover: {
    background: "#F3E8FF",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#F3E8FF",
    padding: "2.5em 2.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#000000",
    padding: "1em",
    fontSize: "2rem",
    gap: "1em",
  },

  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span data-testid="nav_bar_container">
      <Menu
        id="menu_container"
        styles={styles}
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item font-mono  text-neutral-900"
          id="home"
        >
          Home
        </Link>
        <Link
          href="/decoder"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item font-mono text-neutral-900"
          id="decoder"
        >
          Decoder
        </Link>
        <Link
          href="/about"
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu-item font-mono  text-neutral-900"
          id="about"
        >
          About
        </Link>
      </Menu>
    </span>
  );
};

export default NavBar;
