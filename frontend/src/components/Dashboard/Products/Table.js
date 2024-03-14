"use client";
import React, { useState } from "react";
import styles from "../Dashboard.module.scss";

const Table = ({ products, action }) => {
  const [openAction, setOpenAction] = useState(false);
  const [actionPosition, setActionPosition] = useState(null);

  /* Function to handle Action Button functionalities */

  const handleAction = (id) => {
    setActionPosition(id);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Sales</th>
          <th>Revenue</th>
          <th>Status</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.sales}</td>
            <td>{product.price}</td>
            <td>{product.status}</td>
            <td>{product.type}</td>
            <td>
              <div className={styles.actionsContainer}>
                <button
                  onClick={() => {
                    handleAction(product._id);
                  }}
                >
                  Action
                </button>
                <div
                  className={`${styles.actionInformation} ${
                    actionPosition == product._id && styles.openAction
                  }`}
                >
                  <ul>
                    {action.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
