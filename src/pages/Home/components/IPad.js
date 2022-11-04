import React, { useEffect, useState } from "react";
import { Button, Col, Image, Rate, Row } from "antd";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "antd";
import { addProduct } from "../../../redux/actions/Cart";
import '../Phone/Phone.css';
export default function IPad() {
  
  const { device } = useSelector((reduxData) => reduxData.device);
  useEffect(() => {
    if(device == "computer"){
      setChangeSlide(4);
    }
    if(device == "mobile"){
      setChangeSlide(2);
    }
  },[device])
  const dispatch = useDispatch();
  const [changeSlide, setChangeSlide] = useState(4);
  const { products } = useSelector((redux) => redux.products);
  const { productPhotos } = useSelector((redux) => redux.productPhotos);
  const handleAddCart = (product) => {
    dispatch(addProduct(product));
  };
  const handleView = () => {};
  return (
    <>
    <Row style={{height:"40rem"}}>
    <Col
        lg={{ span: 16, offset: 4 }}
        md={{ span: 16, offset: 4 }}
        sm={{ span: 20, offset: 2 }}
        xs={{ span: 24 }}
        style={{ height: "200px", marginTop: "4rem" }}
      >
        <Col span={24} align="middle">
          <h1>Máy tính bảng</h1>
          <hr></hr>
        </Col>
        <Col span={24} >
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={changeSlide}
            spaceBetween={10}
            navigation
          >
            {products.map((product) => {
              let photos = [];
              if(product.productLine.productType.productTypeName == "Máy tính bảng"){
                {productPhotos.map((photo) => {
                  if(photo.product.productCode == product.productCode){
                    photos.push(photo)
                  }
                })};
                return (
                  <SwiperSlide key={product.id}>
                        <Col>
                            <div class="wsk-cp-product">
                              <div class="wsk-cp-img">
                                <Image
                                  src={photos[0].photoURL}
                                  alt="Product"
                                  class="img-responsive"
                                />
                              </div>
                              <div class="wsk-cp-text" style={{paddingTop:"90%"}}>
                                <div class="category">
                                  <span style={{cursor:'pointer',backgroundColor:'red'}} onClick={() => handleAddCart(product)}>Mua</span>
                                </div>
                                <div class="title-product">
                                  <h3>{product.productName}</h3>
                                </div>
                                <div class="description-prod">
                                  <Rate  value={4}/>
                                </div>
                                <div class="card-footer">
                                  <div class="wcf-left">
                                    <span class="price" style={{color:'red'}}>{product.buyPrice.toLocaleString("vi-VN")}</span>
                                  </div>
                                  <div class="wcf-right">
                                    <Button type="dashed">Xem sản phẩm</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </Col>
                      </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </Col>
      </Col>
    </Row>
      
    </>
  );
}
