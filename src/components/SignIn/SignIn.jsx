import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={s.main}>
      <p className={s.p}>Sign In</p>
      <form>
        <input placeholder="email" className={s.input} type="Email" />
        <input placeholder="password" className={s.input} type="Password" />

        <p className={s.noAccoount}>No account?</p>
        <NavLink to="/create" className={(s.noAccoount, s.link)}>
          Create one!
        </NavLink>
        <button className={s.button}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
