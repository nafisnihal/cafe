import { Box } from "@mui/material";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link className="navs" smooth to="/">
            Home
          </Link>
          <Link className="navs" smooth to="/#about">
            About Us
          </Link>
          <Link className="navs" smooth to="/#products">
            Our Product
          </Link>
          <Link className="navs" smooth to="/#menu">
            Menu
          </Link>
        </Box>
        <Box>
          <img
            src="https://i.ibb.co/XJYvpqY/output-onlinepngtools-1.png"
            alt="logo"
          ></img>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link className="navs" smooth to="/#blog">
            Blog News
          </Link>
          <Link className="navs" smooth to="/#contact">
            About Us
          </Link>
          <Link className="navs" smooth to="/#cart">
            Cart
          </Link>
          <Link className="navs" smooth to="/#login">
            Log In
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
