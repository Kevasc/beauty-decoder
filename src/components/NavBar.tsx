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
  bmCross: {
    background: "#701a75",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100vh",
  },
  bmMenu: {
    background: "#F3E8FF",
    padding: "2.5em",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#000000",
    padding: "1em",
    fontSize: "1.5rem",
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
          className="py-4 menu-item font-mono text-neutral-900"
          id="home"
        >
          Home
        </Link>
        <Link
          href="/decoder"
          onClick={() => {
            setIsOpen(false);
          }}
          className="py-4 menu-item font-mono text-neutral-900"
          id="decoder"
        >
          Decoder
        </Link>
        <Link
          href="/liked-products"
          onClick={() => {
            setIsOpen(false);
          }}
          className="py-4 menu-item font-mono text-neutral-900"
          id="likedProducts"
        >
          My Products
        </Link>
        <Link
          href="/contact"
          onClick={() => {
            setIsOpen(false);
          }}
          className="py-4 menu-item font-mono text-neutral-900"
          id="contact"
        >
          Contact
        </Link>
      </Menu>
    </span>
  );
};

export default NavBar;
