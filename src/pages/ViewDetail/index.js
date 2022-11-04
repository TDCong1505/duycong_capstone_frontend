import { Avatar, Col, Empty, Input, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductDescService from "../../services/auth/ProductDescService";
import ProductService from "../../services/auth/ProductService";
import VoteService from "../../services/auth/VoteService";
import styles from "./Detail.module.scss";
import Properties from "./Properties";


const convertTime = (time) => {
  let date = new Date(time);
  return time;
}

const View = () => {
  const { code } = useParams();
  const [product, setProduct] = useState({});
  const [desc, setDesc] = useState({});
  const [votes, setVotes] = useState([]);
  const loadDetail = async () => {
    try {
      let res = await ProductService.getProductByCode(code);
      setProduct(res.data);;
    } catch (error) {
      console.log(error);
    }
  };

  const loadDesc = async () => {
    try {
      let res = await ProductDescService.getByProductCode(code);
      setDesc(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadVotes = async () => {
    try {
      let res = await VoteService.getVoteByProductCode(code);
      setVotes(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadDetail();
    loadDesc();
    loadVotes();
  }, []);

  return (
    <>
      <Col
        md={{ span: 16, offset: 4 }}
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 22, offset: 1 }}
        className={styles.container}
      >
        <Row>
          <Col
            md={{ span: 14, offset: 0 }}
            xs={{ span: 24 }}
            className={styles.desc}
          >
            <div className={styles.fieldset}>
              <div>
                <div className={styles.legend}>Thông tin máy :</div>
                <h2>Tên sản phẩm : {product.productName} .</h2>
                <h3>
                  Mã sản phẩm : <span>{product.productCode} .</span>
                </h3>
                <h4>{product.productDescripttion}</h4>
              </div>
              <hr></hr>
              <div>
                <div className={styles.legend}>Bình luận :</div>
                {votes.length ? votes.map((vote) => {
                  return (
                    <>
                      <div className={styles.avatar}>
                        <div>
                          <Avatar size={32} src={vote.customer.avatarLink}></Avatar> <span className={styles.name}>{`${vote.customer.firstName} ${vote.customer.lastName}`}</span> :
                          <Rate value={vote.vote} />
                        </div>
                        <div className={styles.date}>{convertTime(vote.timeVote)}</div>
                      </div>
                      <div className={styles.comment}>
                        <h4>{vote.comment}</h4>
                      </div>
                    </>
                  );
                }) : (<Empty description="Chưa có bình luận nào cho sản phẩm này " />)}
                
              </div>
            </div>
          </Col>
          <Col md={{ span: 10 }} xs={{ span: 24 }} className={styles.desc}>
            <div className={styles.fieldset}>
              <div className={styles.legend}> Thông số kỹ thuật :</div>
              {Object.keys(product).length && (
                <>
                  <Properties
                    title={desc.inches}
                    name="Kích thước màn hình :"
                  />
                  <Properties
                    title={desc.pixels}
                    name="Độ phân giải màn hình :"
                  />
                  <Properties title={desc.memory} name="Bộ nhớ trong :" />
                  <Properties title={desc.chipset} name="Chipset :" />
                  <Properties title={desc.bluetooth} name="Bluetooth :" />
                  <Properties title={desc.camera1} name="Camera trước :" />
                  <Properties title={desc.camera2} name="Camera sau :" />
                  <Properties title={desc.camera2} name="Camera sau :" />
                  <Properties title={desc.gps} name="GPS :" />
                  <Properties
                    title={desc.memoryCard}
                    name="Khe cắm thẻ nhớ :"
                  />
                  <Properties title={desc.nfc} name="NFC :" />
                  <Properties title={desc.os} name="Hệ điều hành :" />
                  <Properties title={desc.pin} name="PIN :" />
                  <Properties title={desc.screen} name="Công nghệ màn hình :" />
                  <Properties title={desc.sensor} name="Cảm biến :" />
                  <Properties title={desc.sim} name="SIM :" />
                  <Properties title={desc.size} name="Kích thước :" />
                  <Properties title={desc.weight} name="Trọng lượng :" />
                  <Properties title={desc.video} name="Quay video :" />
                  <Properties title={desc.wlan} name="WLAN :" />
                </>
              )}
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default View;
