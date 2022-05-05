import React, { useEffect, useState } from "react";
import "./style.css";
import EditSellerProfileSlider from "../../component/editSellerProfileSlider";
import storeImg from "../../assets/images/storeImg.jpg";
import Likedbutton from "../../assets/images/Likedbutton.svg";
import LikedBtnDone from "../../assets/icons/LikedButton.svg";
import message from "../../assets/icons/message.svg";
import { Slider } from "@reach/slider";
import "@reach/slider/styles.css";
import { Outlet, Link, useParams, useOutletContext } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import sendIcon from "../../assets/icons/sendIcon.svg";
import UserChatBox from "../../component/chatBox/userChatBox";
import FriendChatBox from "../../component/chatBox/friendChatBox";
import axios from "axios";
import { useIsMounted } from "../../component/isMounted";
var navLinks = [
  { link: "all-collections", text: "All Collections" },
  { link: "clothings-accessories", text: "Clothings & Accessories" },
  { link: "pottery", text: "Pottery" },
  { link: "art-craft", text: "Art & Craft" },
  { link: "health-beauty", text: "Health & Beauty" },
  { link: "other-categories", text: "Other Categories" },
];
//
const SellerProductCollection = () => {
  //
  const [adult, setAdult] = useState();
  const [children, setChildren] = useState();
  const [likeBtn, setLikeBtn] = useState(false);
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sellerDetail, setSellerDetail] = useState({});
  const isMounted = useIsMounted();
  async function getSellertDetail() {
    try {
      const { data } = await axios.get(`/api/auth/get-seller?userID=${id}`);
      if (data) {
        if (isMounted.current) {
          setSellerDetail(data);
        }
      }

      // console.log({ sellerDetail: sellerDetail });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSellertDetail();
  }, [sellerDetail]);

  const style = {
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translateX(50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "2px solid #f4f4f4",
    borderRadius: "0.5em",

    boxShadow: 24,
    p: 4,
  };

  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };

  //use to select the adult radio box list
  const handleAdultChange = (e) => {
    const { name, value } = e.target;

    setAdult({
      [name]: value,
    });
  };
  //use to select the children radio box list
  const handleChildrenChange = (e) => {
    const { name, value } = e.target;

    setChildren({
      [name]: value,
    });
  };

  //uses to display the range
  function sliderRange() {
    return <Slider min={0} max={200} step={10} />;
  }

  return (
    <div className="sellerProductCollection">
      <div className="sellerProductCollection-top">
        <div className="sellerProductCollection-top-A">
          <EditSellerProfileSlider storeName={sellerDetail?.storeName} />
        </div>
        <div className="sellerProductCollection-top-B">
          <div className="sellerProductCollecTop-B">
            <div className="sellerProductCollection-top-left">
              <img src={storeImg} alt="" className="store-image" />
              <div className="store-top-text">
                <h6>{sellerDetail?.storeName}</h6>
                <h5>
                  {sellerDetail?.country + ","} {sellerDetail?.storeAddress}
                </h5>
                <div className="store-top-text-rating">
                  <h6>4.5 ratings</h6>
                  <span className="cart-item-star">&#9733;</span>
                </div>
              </div>
            </div>
            <div className="sellerProductCollection-top-right">
              <div className="sellerProductCollection-top-right-top">
                <div
                  className="seller-profile-like-container"
                  onClick={handleLike}
                >
                  <img
                    src={likeBtn ? LikedBtnDone : Likedbutton}
                    className="store-likeBtn"
                  />
                  <span>Like</span>
                </div>
                <div
                  className="seller-profile-like-container"
                  onClick={handleOpen}
                >
                  <img src={message} className="store-likeBtn" />
                  <span>Messages</span>
                </div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="seller-chat-box">
                      <div className="seller-chat-box-top">
                        <div className="seller-chat-box-top-left">
                          <img
                            src={storeImg}
                            alt=""
                            className="store-image-chat"
                          />
                          <div className="seller-chat-text-container">
                            <span>Chesterfield Store</span>
                            <span>
                              <i
                                class="fa fa-circle sellerChatCircle"
                                aria-hidden="true"
                              ></i>
                              online
                            </span>
                          </div>
                        </div>
                        <div className="seller-chat-box-top-right">
                          <i
                            className="fa fa-times-circle-o faCancleO"
                            aria-hidden="true"
                            onClick={handleClose}
                          ></i>
                        </div>
                      </div>
                      <hr />
                      <div className="seller-chat-box-bottom">
                        <div className="seller-chat-box-bottom-chat">
                          <UserChatBox />
                          <FriendChatBox />
                        </div>
                        <div className="seller-chat-input">
                          <textarea
                            placeholder="Type your message..."
                            cols="40"
                            rows="2"
                          ></textarea>
                          <img src={sendIcon} alt="" className="sendIcon" />
                        </div>
                      </div>
                    </div>
                    {/* <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography> */}
                  </Box>
                </Modal>
              </div>
              <div className="sellerProductCollection-top-right-bottom">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search.." />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="sellerProductCollection-bottom">
        <div className="sellerProductCollection-bottom-left">
          <div className="sellerProductCollection-bottom-left-container">
            <div className="seller-proct-left-bar">
              {navLinks.map((x, i) => {
                return (
                  <Link key={i} to={x.link}>
                    <div className="seller-procduct-nav">{x.text} </div>
                  </Link>
                );
              })}
            </div>
            <hr />
            {/* =====Gender========= */}
            <div className="productScreenLeftGender">
              <p className="gender">Gender</p>

              {/* =====Adult======== */}
              <p className="aldult">Adult</p>
              <form>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="maleId"
                    value="Male"
                    name="adult"
                    onChange={handleAdultChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="maleId">
                    Male
                  </label>
                </div>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="femailId"
                    value="Female"
                    name="adult"
                    onChange={handleAdultChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="femailId">
                    Female
                  </label>
                </div>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="allId"
                    value="All"
                    name="adult"
                    onChange={handleAdultChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="allId">
                    All
                  </label>
                </div>
              </form>
              {/* =====Children======== */}
              <p className="aldult">Children</p>
              <form>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="maleChildId"
                    value="Male"
                    name="children"
                    onChange={handleChildrenChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="maleChildId">
                    Male
                  </label>
                </div>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="femailChildId"
                    value="Female"
                    name="children"
                    onChange={handleChildrenChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="femailChildId">
                    Female
                  </label>
                </div>
                <div className="checkboxRow">
                  <input
                    type="radio"
                    id="allChildId"
                    value="All"
                    name="children"
                    onChange={handleChildrenChange}
                  />{" "}
                  &nbsp; &nbsp;
                  <label className="checkboxLabel" htmlFor="allChildId">
                    All
                  </label>
                </div>
              </form>
            </div>
            <hr />
            <div className="seller-proct-left-bar-bottom">
              {/* ======price in====== */}
              <div className="productScreenLeftPrice">
                <div className="priceIn">
                  <p>Price in (€)</p>
                  <div className="priceInBtn">
                    <p>Apply</p>
                  </div>
                </div>

                <div className="sliderContaer">{sliderRange()}</div>

                <div className="priceInInput ">
                  <input type="text" placeholder="20" />
                  <input type="text" placeholder="50" />
                </div>
              </div>
              <hr />
              <div className="report-page-container">
                <span>Report page</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sellerProductCollection-bottom-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerProductCollection;
