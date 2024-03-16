"use client";

import { Dashboard } from "@/static/Dashbaord";
import Link from "next/link";
import React from "react";
import styles from "../Dashboard.module.scss";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const router = usePathname();
  console.log(router);
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarWrapper}>
        <div className={styles.header}>
          <h1>EarnX</h1>
        </div>
        <nav>
          <ul>
            {Dashboard.map((item) => (
              <li key={item.id}>
                <Link
                  className={router === item.path ? styles.activeLink : ""}
                  href={item.path}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
