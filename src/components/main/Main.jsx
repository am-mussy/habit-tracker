import React from "react";
import { NavLink } from "react-router-dom";
import ProfileHUD from "../ProfileHUD/ProfileHUD";

const Main = () => {
  return (
    <div>
      <ProfileHUD />

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
