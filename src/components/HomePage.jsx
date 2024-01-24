import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <NavLink to={"/photo"}>
        <button className="Home">Photo</button>
      </NavLink>
      <NavLink to={"/user"}>
        <button className="Home">User</button>
      </NavLink>
    </div>
  );
};

export default HomePage;
