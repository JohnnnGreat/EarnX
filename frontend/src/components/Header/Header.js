import React from "react";
import { navigation } from "@/static/Header";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>EarnX</h1>
        </div>
        <nav>
          <ul>
            {navigation.map((navItem) => (
              <li key={navItem.id}>
                <Link href={navItem.route}>{navItem.displayText}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.cta_header}>
          <Link href={"auth/signup"}>Become a Creator</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
