"use client";

import Field from "@/components/form/Field";
import React, { useState } from "react";
import styles from "../Auth.module.scss";
import { useDispatch } from "react-redux";
import { login } from "@/actions/auth";
import { message } from "antd";
import ImagePattern from "@/components/ImagePattern";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [formValid, setFormValid] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  // VALID PASSWORS
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const { email, password } = data;
    if (email.length > 10) {
      if (!email.includes("@")) {
        setFormValid(true);
      }
    }

    if (password > 8) {
      keys.map((value) => {
        if (password.includes(value)) {
          symbols.map((sym) => {
            if (password.includes(sym)) {
              setFormValid(true);
            } else {
              console.log("Password must contain at least symbol");
            }
          });
        } else {
          console.log("Password must contain numbers");
        }
      });
    } else {
      console.log("Password can only be 8 characters long");
    }
    dispatch(login(data, message));
    setIsLoading(false);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Grid}>
        <div className={styles.firstSection}>
          <Link className={styles.registerLink} href={"/auth/register"}>
            Register
          </Link>
          <form>
            <h1>Login</h1>
            <Field placeholder={"Email"} type="text" handler={handleEmail} />
            <Field
              placeholder={"Password"}
              type="text"
              handler={handlePassword}
            />
            <button
              onClick={handleSubmit}
              className={isLoading ? styles.LoadingStyles : styles.btnLogin}
            >
              {isLoading ? "Loading" : "Login"}
            </button>
          </form>
        </div>
        <div className={styles.secondSection}>
          <ImagePattern />
        </div>
      </div>
    </div>
  );
};
export default page;
