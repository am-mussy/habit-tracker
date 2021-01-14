import React from "react";
import s from "./Create.module.css";

const Create = () => {
  return (
    <div className={s.main}>
      <form>
        <p className={s.p}>Welcome, my friend</p>
        <p className={s.pSmall}>Who are you?</p>
        <input placeholder="Your name" className={s.input} type="text" />
        <input placeholder="Your email" className={s.input} type="email" />

        <input placeholder="Password" className={s.input} type="password" />
        <input
          placeholder="Password again"
          className={s.input}
          type="password"
        />

        <input
          placeholder="You'r phone number"
          className={s.input}
          type="tel"
          pattern="[0-9]{10}"
        />
        <button className={s.button}>CREATE</button>
      </form>
    </div>
  );
};

export default Create;
