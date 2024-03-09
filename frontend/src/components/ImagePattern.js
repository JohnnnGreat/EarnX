import React from "react";
import LoginPattern from "../../public/LoginPattern.jpg";
import styles from "./Global.module.scss";
import Image from "next/image";

const ImagePattern = () => {
  return (
    <Image className={styles.image} src={LoginPattern} alt="Auth Pattern" />
  );
};

export default ImagePattern;
