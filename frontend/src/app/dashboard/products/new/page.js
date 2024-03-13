"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../Dashboard.module.scss";
import { Types } from "@/static/Dashbaord";
import { message } from "antd";
import { addProduct } from "@/actions/product";
import { useDispatch } from "react-redux";

const New = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: "",
    duration: "",
  });

  const dispatch = useDispatch();

  const handleProductName = (e) => {
    setProduct({ ...product, name: e.target.value });
  };

  const handleProductType = (type) => {
    setProduct({ ...product, type: type });
  };

  const handleProductPrice = (e) => {
    setProduct({ ...product, price: e.target.value });
  };

  const handleProductDuration = (e) => {
    setProduct({ ...product, duration: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product, message, setIsAddingProduct));
  };

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
            <button
              className={`${isAddingProduct && styles.disableAddingProductBtn}`}
              onClick={handleSubmit}
            >
              Next Customize
            </button>
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
              <input
                type="text"
                onChange={handleProductName}
                required
                placeholder="Name of Product"
              ></input>
            </form>

            <h1 className={styles.TypeText}>Type</h1>
            <div className={styles.TypeDetails}>
              {Types.map((item) => (
                <div
                  onClick={() => {
                    handleSelectedType(item.Title);
                    handleProductType(item.Title);
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
                onChange={handleProductPrice}
              ></input>
            </form>
            <form action="">
              <label htmlFor="">Duration</label>
              <select onChange={handleProductDuration}>
                <option value="1 Month">1 month</option>
                <option value="2 Months">2 month</option>
                <option value="3 Months">3 month</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
