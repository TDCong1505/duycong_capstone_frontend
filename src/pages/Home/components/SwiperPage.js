import { Col, Row } from "antd";
import React from "react";
import {  Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

export default function SwiperPage() {
  const DivPC = styled(Col)`
    @media (max-width: 1250px) {
      display: none;
    }
  `;

  const DivMobile = styled(Col)`
    @media (min-width: 1249px) {
      display: none;
    }
  `;
  return (
    <Row style={{ marginTop: "1rem" }}>
      <DivPC md={{ span: 16, offset: 4 }}>
        <Row>
          <DivPC span={4} align="middle">
            <img
              src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/evo_block_product_banner_3.jpg?1658201950621"
              width="90%"
              height="100%"
            ></img>
          </DivPC>
          <Col span={16}>
            <Swiper
              modules={[Autoplay,Navigation]}
              slidesPerView={1}
              navigation
              autoplay
            >
              <SwiperSlide>
                <img
                  width={"100%"}
                  src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_2.jpg?1658201950621"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"100%"}
                  src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_3.jpg?1658201950621"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={"100%"}
                  src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_5.jpg?1658201950621"
                ></img>
              </SwiperSlide>
            </Swiper>
          </Col>
          <DivPC span={4} align="middle">
            <img
              width="90%"
              height="100%"
              src="https://bizweb.dktcdn.net/thumb/large/100/415/483/themes/804267/assets/slider_6.jpg?1658201950621"
            ></img>
          </DivPC>
        </Row>
      </DivPC>
      <DivMobile>
        <Col span={24}>
          <Swiper
            modules={[Autoplay,Navigation]}
            slidesPerView={1}
            autoplay
          >
            <SwiperSlide>
              <img
                width={"100%"}
                src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_2.jpg?1658201950621"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                width={"100%"}
                src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_3.jpg?1658201950621"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                width={"100%"}
                src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/slider_5.jpg?1658201950621"
              ></img>
            </SwiperSlide>
          </Swiper>
        </Col>
      </DivMobile>
      <Col md={{span:16,offset:4}}>
        <Swiper
          modules={[Autoplay,Navigation]}
          slidesPerView={1}
          autoplay
        >
          <SwiperSlide><a>LiDAR là gì? LiDAR Scanner là gì? Mà có thể khiến camera trên iPhone 12 Pro và iPhone 12 Pro Max trở nên khác biệt đến vậy?</a></SwiperSlide>
          <SwiperSlide><a>Hé lộ điểm hiệu năng AnTuTu và Geekbench của siêu phẩm iPhone 12, iPhone 12 Pro mới trình làng, có gì đó sai sai?</a></SwiperSlide>
          <SwiperSlide><a>Tuyệt chiêu nhận biết pin iPhone hao nguồn và cách khắc phục vô cùng hiệu quả</a></SwiperSlide>
        </Swiper>
      </Col>
      <DivPC md={{span:16,offset:4}} style={{marginTop:'1.5rem',backgroundColor:'azure',padding:'1rem',border:'1px solid rgb(241 227 227)'}} >
        <Row >
        <Col span={4} align='middle' style={{lineHeight:'center'}}>
          <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/iphone.png?v=1610274356170"></img>
          <h3>Điện thoại</h3>
        </Col>
        <Col span={5} >
          <Row>
            <Col span={12} align='middle' >
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/laptop.png?v=1610274399887"></img>
              <h3>Laptop</h3>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/watch.png?v=1610274495063"></img>
              <h3>Đồng hồ</h3>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/tablet-computer.png?v=1610274433267"></img>
              <h3>Tablet</h3>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/house.png?v=1610274540683"></img>
              <h3>Nhà thông minh</h3>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/power-bank-c0e5ea32-a686-46e4-82df-036294674c13.png?v=1610274569570"></img>
              <h3>Phụ kiện</h3>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/cpu.png?v=1610274597037"></img>
              <h3>Linh kiện PC</h3>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/speaker-73fa354a-a248-4c08-836f-cd13374624f3.png?v=1610274465477"></img>
              <h3>Âm thanh</h3>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle'>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/computer.png?v=1610274637250"></img>
              <h3>Máy tính</h3>
            </Col>
          </Row>
        </Col>

        </Row>
        
      </DivPC>
      <DivMobile xs={{span:22,offset:1}} style={{marginTop:'1.5rem',backgroundColor:'azure',padding:'1rem',border:'1px solid rgb(241 227 227)'}} >
        <Row >
        <Col span={4} align='middle' style={{padding:'1rem 1rem'}}>
          <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/iphone.png?v=1610274356170"></img>
        </Col>
        <Col span={5} >
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/laptop.png?v=1610274399887"></img>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/watch.png?v=1610274495063"></img>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/tablet-computer.png?v=1610274433267"></img>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/house.png?v=1610274540683"></img>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/power-bank-c0e5ea32-a686-46e4-82df-036294674c13.png?v=1610274569570"></img>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/cpu.png?v=1610274597037"></img>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/speaker-73fa354a-a248-4c08-836f-cd13374624f3.png?v=1610274465477"></img>
            </Col>
          </Row>
          <Row>
            <Col span={12} align='middle' style={{padding:'1rem'}}>
              <img src="https://bizweb.dktcdn.net/thumb/large/100/415/483/collections/computer.png?v=1610274637250"></img>
            </Col>
          </Row>
        </Col>

        </Row>
        
      </DivMobile>
    </Row>
  );
}
