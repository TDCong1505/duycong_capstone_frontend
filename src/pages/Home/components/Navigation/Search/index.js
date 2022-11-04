import { Input } from "antd";
import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <>
      <div className={styles.label}>
        <Input type="text" className={styles.input} />
        <div className={styles.typed_animation}>
          <h1 className={styles.typed_out}>Bạn cần tìm gì ? 😘</h1>
        </div>
      </div>
    </>
  );
};

export default Search;
