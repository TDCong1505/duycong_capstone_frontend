import { Button, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import OrderService from '../../../services/auth/OrderService';

export default function History() {
    const idUser = localStorage.getItem("idUser");
    const [ cart , setCart ] = useState([]);
    let sumProduct = 0;
    let sumPrice = 0;
    const loadHistory = async () => {
        let res = await OrderService.getOrderOfCustomer(idUser);
        setCart(res.data);
    }
    useEffect(() => {
        loadHistory();
    },[])
    {cart.map((order) => {
        let orderDetail = order.orderDetails;
        orderDetail.map((detail) => {
            sumProduct += detail.quantityOrder;
            sumPrice += detail.quantityOrder * detail.priceEach;
        })
    })}
  return (
    <>
    <Col style={{border:'5px solid rgb(169, 47, 47)',marginTop:'5rem',padding:'1rem',borderRadius:'20px',minHeight:'30rem'}} lg={{span:12,offset:6}} md={{span:12,offset:6}} xs={{span:22,offset:1}}>
        <Col span={24}>
            <h3 style={{color:'red'}}>Số sản phẩm đã mua : {sumProduct}</h3>
            <h3 style={{color:'red'}}>Điểm tích luỹ : {sumPrice.toLocaleString('vi-VN')} VNĐ</h3>
        </Col>
        {cart.map((order) => {
            return (
                <>
                <h1>Id laf : {order.id} </h1><NavLink to={`/viewOrderDetail/${order.id}`}>Xem đơn hàng này</NavLink>
                </>
            )
        })}
    </Col>    
    </>
  )
}
