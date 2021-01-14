import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavLink to="/signin">
        <button>SignIn</button>
      </NavLink>
      <NavLink to="/create">
        <button>create</button>
      </NavLink>
      <NavLink to="/table">
        <button>table</button>
      </NavLink>
    </div>
  );
};

export default Main;
