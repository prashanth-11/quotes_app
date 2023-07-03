import React, { useRef, useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const activeLink = " bg-blue-100 text-black";
  const normalLink = "";

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <p to="/">
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              width: "130px",
              height: "130px",
            }}
          >
            <img style={{ width: "70%", height: "40%" }} src="./q.png" alt="" />
          </h3>
        </p>
      </NavLink>
      <nav ref={navRef} style={{ width: "100%" }}>
        <div
          className="nav1"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="text-decoration-none " to="/About">
                About
              </p>
            </NavLink>
            <NavLink
              to="/Getstarted"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="text-decoration-none " to="/">
                Picture
              </p>
            </NavLink>
            <NavLink
              to="/Quote of the Day"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="text-decoration-none " to="/Quoteday">
                Quote of the Day
              </p>
            </NavLink>
            <NavLink
              to="/Random"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="text-decoration-none " to="/Random">
                Random Quotations
              </p>
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <p className="text-decoration-none ">Contact Us</p>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/Login"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <button>
                {" "}
                <p className="text-decoration-none " to="/login">
                  Login/Signup
                </p>
              </button>{" "}
            </NavLink>
            {/* <NavLink
              to="/Sign up"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <button>
                {" "}
                <p className="text-decoration-none " to="/Signin">
                  Sign up
                </p>
              </button>{" "}
            </NavLink> */}
          </div>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Navbar;
