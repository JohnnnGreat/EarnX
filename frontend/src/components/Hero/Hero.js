import React from "react";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Become a Creator and Earn</h1>
          <div className={styles.link_cta}>
            <Link href="/auth/signup">Start Selling...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
