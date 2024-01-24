import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/photo"}>Photo</NavLink>
      <NavLink to={"/album"}>Album</NavLink>
      <NavLink to={"/user"}>User</NavLink>
      <NavLink to={"/detail"}>Detail</NavLink>
    </div>
  );
};

export default Navbar;
