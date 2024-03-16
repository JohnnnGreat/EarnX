"use client";
import React, { useEffect, useState } from "react";
import styles from "../Dashboard.module.scss";
import Link from "next/link";
import Image from "next/image";
import EmptyProduct from "../../../../public/empty.png";
import productReducer from "@/reducers/product";
import useSWR from "swr";
import API from "@/app/utils/api";
import { getID } from "@/actions/product";
import { message } from "antd";
import { actionDetails } from "@/static/Dashbaord";
import Table from "@/components/Dashboard/Products/Table";

const Product = () => {
  const [products, setProducts] = useState([]);
  // const [userId, setUserId] = useState(getID());
  useEffect(() => {
    const getProducts = async (userId) => {
      try {
        const response = await API.get(`/product/getallproducts/${userId}`);
        const { data } = response;

        if (data.success) {
          message.success(data.message);
          setProducts(data?.products);
          localStorage.setItem("products", JSON.stringify(data.products));
        }
      } catch (error) {
        message.error(error.message);
      }
    };

    if (window !== undefined) {
      const id = localStorage.getItem("id");
      getProducts(id);
    }
  }, []);

  return (
    <div className={styles.secHeader}>
      <div className={styles.secWrapper}>
        <div className={styles.secHeaderContainer}>
          <div className={styles.headerLink}>
            <h1>Products</h1>
            <Link
              className={styles.AddProduct}
              href={"/dashboard/products/new"}
            >
              Add a New Product
            </Link>
          </div>

          <div className={styles.secGrid}>
            <ul>
              <li>
                <button>All Products</button>
              </li>
              <li>
                <button>Affiliated Products</button>
              </li>
            </ul>
          </div>
        </div>

        {products.length === 0 ? (
          <div className={styles.Products}>
            <div>
              <Image
                className={styles.EmptyProduct}
                src={EmptyProduct}
                alt="Image for empty product Category"
              />
              <h1>Opps, It seem your product catalog is empty!</h1>
              <Link
                className={styles.AddProduct}
                href={"/dashboard/products/new"}
              >
                Add a New Product
              </Link>
            </div>
          </div>
        ) : (
          <Table products={products} action={actionDetails} />
        )}
      </div>
    </div>
  );
};

export default Product;
