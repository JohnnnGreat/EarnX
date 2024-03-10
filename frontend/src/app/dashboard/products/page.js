import React from "react";
import styles from "../Dashboard.module.scss";
import Link from "next/link";
import Image from "next/image";
import EmptyProduct from "../../../../public/empty.png";

const Product = () => {
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
      </div>
    </div>
  );
};

export default Product;
