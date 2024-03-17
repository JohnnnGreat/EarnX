"use client";
import API from "@/app/utils/api";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../../../Dashboard.module.scss";
import Link from "next/link";
import InputPrice from "@/components/Dashboard/Product/InputPrice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPage = () => {
  const params = usePathname();

  const routeId = params.split("/")[3];
  const [product, setProduct] = useState(null);

  const [text, setText] = useState(product?.name);
  const [isPricingChoice, setIsPricingChoice] = useState(false);
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const [showImageOption, setShowImageOption] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(null);

  useEffect(() => {
    const getProduct = async (productId) => {
      try {
        const response = await API.get(
          `/product/getproductdetails/${productId}`
        );
        const { data } = response;
        console.log(data);
        if (data.success) {
          setProduct(data.product);
        }
      } catch (error) {
        message.error(error.message);
      }
    };

    getProduct(routeId);
  }, []);

  const handleSave = () => {};

  const handlePricingChoice = () => {
    setIsPricingChoice(true);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleText = (e) => {
    setUpdatedProduct({ ...updatedProduct, name: e.target.value });
  };
  const handleSaveSubmit = (e) => {
    setUpdatedProduct({ ...updatedProduct, price: price });
  };
  return (
    <div className={styles.edit}>
      <div className={styles.editWrapper}>
        <div className={styles.newHeader}>
          <h1>{product?.name}</h1>
          <div>
            <Link href={"/dashboard/products"}>Cancel</Link>
            <button
              //   className={`${isAddingProduct && styles.disableAddingProductBtn}`}
              onClick={handleSave}
            >
              Save and Continue
            </button>
          </div>
        </div>
        <div className={styles.editContainer}>
          <div className={styles.mainEdit}>
            <form action="">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={text}
                onChange={handleText}
                placeholder="Product Name"
              />
            </form>

            <div className={styles.richText}>
              <h1 className={styles.richTextText}>Description</h1>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>

            <div className={styles.url}></div>
            <form action="">
              <label htmlFor="">Custom Domain</label>
              <input type="text" value={text} placeholder="yourdomain.com" />
            </form>
            <br />
            <br />
            <hr />

            <div className={styles.cover}>
              <h1 className={styles.coverText}>Cover</h1>

              <div className={styles.coverContainer}>
                {!showImageOption ? (
                  <div>
                    <button
                      onClick={() => {
                        setShowImageOption(true);
                      }}
                    >
                      Upload a Cover Image
                    </button>
                    <p>
                      Images should be horizontal, at least 1280x720px, and 72
                      DPI (dots per inch).
                    </p>
                  </div>
                ) : (
                  <div className={styles.imageOptions}>
                    <label htmlFor="image">Computer Files</label>
                    <input type="file" id="image" />
                    <button>External Link</button>
                  </div>
                )}
              </div>
            </div>
            <br />
            <br />
            <hr />

            <div className={styles.thumbnail}>
              <h1>Thumbnail</h1>

              <div></div>
            </div>
            <br />
            <br />
            <hr />

            <div className={styles.productInfo}>
              <h1 className={styles.productInfoText}>Product Info</h1>
              <select>
                <option value="I want this">I want this</option>
                <option value="Buy this">Buy This</option>
                <option value="Pay">Pay</option>
              </select>
            </div>

            <br />
            <br />
            <hr />
            <div className={styles.pricing}>
              <h1 className={styles.pricingText}>Pricing</h1>

              <div className={styles.pricingInput}>
                <h1>N</h1>
                <input
                  type="text"
                  onChange={handlePriceChange}
                  placeholder="Enter Price"
                />
              </div>
              <div className={styles.checkBoxOption}>
                <InputPrice
                  handlePricingChoice={handlePricingChoice}
                  isPricingChoice={isPricingChoice}
                />

                <div>THis is the pricing modal option</div>
              </div>
            </div>
          </div>
          <div className={styles.preview}>
            <div className={styles.previewWrapper}>
              <h1 className={styles.previewText}>Preview</h1>
              <div className={styles.cover}></div>
              <div className={styles.previewInfo}>
                <div>
                  <h1 className={styles.tag}>Price</h1>
                  <h1 className={styles.value}>{price}</h1>
                </div>
                <div>
                  <h1 className={styles.tag}>User</h1>
                  <h1 className={styles.value}>{product?.user?.email}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
