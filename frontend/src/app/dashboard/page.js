import React from "react";
import ProtectedLayout from "./layout";
import styles from './Dashboard.module.scss'

const index = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeWrapper}>
        <div className={styles.HomeHeader}>
          <h1>Welcome to EarnX</h1>
        </div>
      </div>
    </div>
  );
};

export default index;
