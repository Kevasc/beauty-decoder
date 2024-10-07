"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  const showSettings = useCallback((event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Settings clicked");
  }, []);

  return (
    <Menu>
      {/* Use Link directly, no need for <a> tags */}
      <Link href="/" className="menu-item" id="home">
        Home
      </Link>
      <Link href="/about" className="menu-item" id="about">
        About
      </Link>
      <Link href="/contact" className="menu-item" id="contact">
        Contact
      </Link>

      {/* Settings link with an onClick event */}
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default NavBar;
