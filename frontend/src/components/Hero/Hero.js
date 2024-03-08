import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Become a Creator and Earn</h1>
          <p>
            Empower your creativity with our platform! Become a Creator and Earn
            with ease. Join a vibrant community where your talents are
            celebrated and rewarded.
          </p>
          <div className={styles.link_cta}>
            <Link href="/auth/signup">Start Selling...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
