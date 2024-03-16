import React from "react";
import ProtectedLayout from "./layout";
import styles from "./Dashboard.module.scss";
import { gettingStarted } from "@/static/Dashbaord";

const index = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeWrapper}>
        <div className={styles.HomeHeader}>
          <h1>Welcome to EarnX</h1>
        </div>

        <div className={styles.gettingStarted}>
          <h1 className={styles.pageHeader}>Get Started</h1>

          <div className={styles.gettingStartedContainer}>
            {gettingStarted.map((item, index) => (
              <div className={styles.gettingStartedItem} key={index}>
                <div className={styles.checkCircle}></div>
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bestSelling}>
          <h1 className={styles.bestSellingHeader}>Best Selling</h1>
          <div>
            <p>
              You haven't made any sales yet. Learn how to build a following and
              sell on Gumroad Discover
            </p>
          </div>
        </div>

        <div className={styles.activity}>
          <h1 className={styles.activityHeader}>Activity</h1>
          <div>
            <p>
              Followers and sales will show up here as they come in. For now,
              create a product or customize your profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
