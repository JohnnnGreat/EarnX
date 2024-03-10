"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../Dashboard.module.scss";
import { Types } from "@/static/Dashbaord";

const New = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectedType = (title) => {
    setSelectedType(title);
  };

  return (
    <div className={styles.secHeader}>
      <div className={styles.secWrapper}>
        <div className={styles.newHeader}>
          <h1>Publish your first product</h1>
          <div>
            <Link href={"/dashboard/products"}>Cancel</Link>
            <button>Next Customize</button>
          </div>
        </div>

        <div className={styles.newProducts}>
          <div className={styles.newText}>
            <p>
              Make some selections, fill in some boxes, and go live in minutes.
            </p>
          </div>
          <div className={styles.productChoice}>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" required placeholder="Name of Product"></input>
            </form>

            <h1 className={styles.TypeText}>Type</h1>
            <div className={styles.TypeDetails}>
              {Types.map((item) => (
                <div
                  onClick={() => {
                    handleSelectedType(item.Title);
                  }}
                  key={item.id}
                  className={`${styles.TypeItem} ${
                    selectedType === item.Title && styles.selectedType
                  }`}
                >
                  <h1>{item.Title}</h1>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <form action="">
              <label htmlFor="">Price (N)</label>
              <input
                type="text"
                placeholder="Price of Product in Naira"
                required
              ></input>
            </form>
            <form action="">
              <label htmlFor="">Duration</label>
              <select>
                <option>1 month</option>
                <option>2 month</option>
                <option>3 month</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
