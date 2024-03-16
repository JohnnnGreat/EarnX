import React from "react";
import styles from "../../../../src/app/dashboard/Dashboard.module.scss";

const InputPrice = ({ handlePricingChoice, isPricingChoice }) => {
  return (
    <form
      action=""
      className={isPricingChoice && styles.openPricingModal}
      onClick={handlePricingChoice}
    >
      <div className={styles.checkBoxContainer}>
        <div className={styles.checkBoxCircle}></div>
      </div>
      <h1 htmlFor="pricingCheckbox">Allow Customers to pay what they want</h1>
      <input type="checkbox" id="pricingCheckbox" />
    </form>
  );
};

export default InputPrice;
