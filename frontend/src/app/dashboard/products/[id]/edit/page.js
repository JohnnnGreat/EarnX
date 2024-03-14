"use client";
import API from "@/app/utils/api";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditPage = () => {
  const params = usePathname();

  const routeId = params.split("/")[3];
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async (productId) => {
      try {
        const response = await API.get(
          `/product/getproductdetails/${productId}`
        );
        const { data } = response;
        if (data.success) {
          setProduct(data.product);
        }
      } catch (error) {
        message.error(error.message);
      }
    };

    getProduct(routeId);
  }, []);
  return (
    <div className={styles.edit}>
      <div className={styles.editWrapper}>
        <div className={styles.newHeader}>
          <h1>{product?.name}</h1>
          <div>
            <Link href={"/dashboard/products"}>Cancel</Link>
            <button
              className={`${isAddingProduct && styles.disableAddingProductBtn}`}
              onClick={handleSubmit}
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
