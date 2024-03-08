import React from "react";
import styles from "./Form.module.scss";

const Field = ({ placeholder, type, handler }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      onChange={handler}
    />
  );
};

export default Field;
