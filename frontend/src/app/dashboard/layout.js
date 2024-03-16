import React from "react";
import styles from "./Dashboard.module.scss";
import SideNav from "@/components/Dashboard/Home/SideNav";

const layout = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardGrid}>
        <div className={styles.sectionOne}>
          <SideNav />
        </div>

        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwoWrapper}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
