import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import orderProductImg from "../../assets/images/orderProductImg.jpg";
import customerImg from "../../assets/images/customerImg.jpg";
import "./style.css";
const SellerReviewDetailList = () => {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className="sellerReviewDetail" onClick={() => setShow(true)}>
        <div>
          <img src={orderProductImg} alt="" className="product-review-img" />
          <span>A tincidunt egestas magna tellus.</span>
        </div>
        <div className="customer-review-container">
          <img src={customerImg} alt="" className="customer-review-img" />
          <div className="sellerReviewDetailText">
            <span>Rayna Torff</span>
            <span>Helsinki, Finland</span>
          </div>
        </div>
        <div>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
          <span className="customer-review-srar">&#9733;</span>
        </div>
        <div className="customer-review-text">
          Justo lacus quis eu enim tristique imperdiet mas........
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="modal-container-top">
                <img src={customerImg} alt="" className="customer-review-img" />
                <div className="modal-top-text">
                  <h5>Ray Torf</h5>
                  <h6>Helsinki, Finland</h6>
                  <div>
                    <span className="customer-review-srar">&#9733;</span>
                    <span className="customer-review-srar">&#9733;</span>
                    <span className="customer-review-srar">&#9733;</span>
                    <span className="customer-review-srar">&#9733;</span>
                    <span className="customer-review-srar">&#9733;</span>
                  </div>
                </div>
                <h6>22/02/2022</h6>
              </div>
              {/* <Button variant="secondary" onClick={() => setShow(false)}>
                Cancel
              </Button> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-container">
              <div className="modal-container-middle"></div>
              <div className="modal-container-bottom">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione reprehenderit molestiae qui, dolorem, voluptate dolore
                  incidunt laborum corrupti maiores ea dolores voluptatum labore
                  fugit nihil ut, minus porro delectus similique!
                </span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default SellerReviewDetailList;
