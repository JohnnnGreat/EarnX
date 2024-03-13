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

const Product = () => {
  // const myState = useSelector((state) => console.log(state));

  /* const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:3030/product/getallproducts",
    fetcher
  ); */
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (window.localStorage) {
      if (localStorage.getItem("products")) {
        setProducts(JSON.parse(localStorage.getItem("products")));
      } else {
        const id = getID();
        getProducts(id);
      }
    } else {
      const id = getID();
      getProducts(id);
    }
    const getProducts = async (userId) => {
      try {
        const response = await API.get(`/product/getallproducts/${userId}`);
        console.log(response);
        const { data } = response;

        console.log(data);

        if (data.success) {
          message.success(data.message);

          localStorage.setItem("products", JSON.stringify(data.products));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className={styles.secHeader}>
      <div className={styles.secWrapper}>
        <div className={styles.secHeaderContainer}>
          <h1>Products</h1>
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

        <Link className={styles.AddProduct} href={"/dashboard/products/new"}>
          Add a New Product
        </Link>

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
          <div>
            {products.map((product) => (
              <div>
                <h1>{product.name}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
