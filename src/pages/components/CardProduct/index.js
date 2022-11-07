import { Image, Rate } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "./CardProduct.module.scss";
import { addProduct } from "../../../redux/actions/Cart";
import { useNavigate } from "react-router";
import { stringify } from "rc-field-form/es/useWatch";
import './style.css';

const CardProduct = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch(addProduct(product));
  }

  const viewProduct = () => {
    navigate(`/view/${product.productCode}`);
    const historyProduct = localStorage.getItem('historyProduct');
    if(historyProduct){
      const parseHistory = JSON.parse(historyProduct);
      parseHistory.push({
        id:product.productName,
        buyPrice:product.buyPrice,
        productCode:product.productCode,
        mainPhotoURL:product.mainPhotoURL,
      })
      localStorage.setItem('historyProduct',stringify(parseHistory));
    } else {
      localStorage.setItem('historyProduct',stringify([{
        productName:product.productName,
        buyPrice:product.buyPrice,
        productCode:product.productCode,
        mainPhotoURL:product.mainPhotoURL,
      }]));
    }
  }

  return (
    <div className={styles.container}>
      <Image
        alt="image"
        className={styles.image}
        src={product.mainPhotoURL}
      />
      <h4 className={styles.name}>{product.productName}</h4>
      <div className={styles.price}>
        {product.buyPrice?.toLocaleString("vi-VN")} VNĐ
      </div>
      <div className={styles.button_group}>
        <div className={styles.add} onClick={() => addToCart()}>Thêm vào giỏ hàng</div>
        <div className={styles.view} onClick={() => viewProduct()}>Xem chi tiết</div>
      </div>
      <div className={styles.vote}>
        <Rate value={5}></Rate>
      </div>
    </div>
  );
};

export default CardProduct;
