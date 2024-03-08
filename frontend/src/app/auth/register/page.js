import React from "react";
import styles from "../Auth.module.scss";

const page = ({handleE}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Grid}>
        <div>
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
              handler={handleEmail}
            />
            <button className={styles.btnLogin}>Login</button>
          </form>
        </div>
        <div></div>
      </div>
      <div className={styles.secondSection}></div>
    </div>
  );
};

export default page;
