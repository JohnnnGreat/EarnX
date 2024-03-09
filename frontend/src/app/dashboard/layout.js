import React from "react";
import styles from "./Dashboard.module.scss";
import SideNav from "@/components/Dashboard/Home/SideNav";

const layout = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}></div>
      <div className={styles.dashboardGrid}>
        <SideNav />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
