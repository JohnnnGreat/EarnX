"use client";

import Field from "@/components/form/Field";
import React, { useState } from "react";
import { handleEmail } from "@/app/utils/auth/Login";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import styles from "./Login.module.scss";

const page = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginGrid}>
        <form>
          <h1>Login</h1>
          <Field
            placeholder={"Enter Your Email Address"}
            type="text"
            handler={handleEmail}
          />
          <Field
            placeholder={"Enter Your Email Address"}
            type="text"
            handler={handleEmail}
          />
          <button className={styles.btnLogin}>Login</button>
        </form>
        <div></div>
      </div>
      <div className={styles.secondSection}></div>
    </div>
  );
};

export default page;
