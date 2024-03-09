"use client";

import React, { useState } from "react";
import styles from "../Auth.module.scss";
import Field from "@/components/form/Field";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ImagePattern from "@/components/ImagePattern";
import { register } from "@/actions/auth";
import { message } from "antd";

const page = ({}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleSubmit = (e) => {
 
    e.preventDefault();

    dispatch(register(data, message, setIsLoading));
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Grid}>
        <div className={styles.firstSection}>
          <Link className={styles.registerLink} href={"/auth/login"}>
            Login
          </Link>
          <form>
            <h1>Create Account</h1>
            <Field
              placeholder={"Email Address"}
              type="email"
              handler={handleEmail}
            />
            <Field
              placeholder={"Password"}
              type="password"
              handler={handlePassword}
            />
            <button
              onClick={handleSubmit}
              className={isLoading ? styles.LoadingStyles : styles.btnLogin}
            >
              {isLoading ? "Loading" : "Register"}
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
