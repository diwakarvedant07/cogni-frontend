import React from "react";
import styles from "./loadingSpinner.module.css"; // Import the CSS module

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
