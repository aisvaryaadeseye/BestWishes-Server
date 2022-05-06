import React, { useState, useEffect } from "react";
import "./style.css";
import ProductSales from "../../component/sellerProductDetailCard/productSales";
import ProductIncome from "../../component/sellerProductDetailCard/productIncome";
import ProductSavess from "../../component/sellerProductDetailCard/productSaves";
import productImg from "../../assets/images/productImg.png";
import SellerProductDetailReview from "../../component/sellerProductDetailReview";
import Pagination from "@material-ui/lab/Pagination";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useIsMounted } from "../../component/isMounted";
import spinner from "../../assets/icons/spinner.gif";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ScreenSize from "../../component/screenSize/screenSize";
//
const SellerProductDetailScreen = () => {
  //
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productCategory, setProductCategory] = useState(
    "clothingsAndAccessories"
  );
  const [productType, setProductType] = useState("");
  const [productDeliveryTime, setProductDeliveryTime] = useState("");
  const [productSpecification, setProductSpecification] = useState("");
  const [productFrontImg, setProductFrontImg] = useState(null);
  const [productBackImg, setProductBackImg] = useState("");
  const [productUpwardImg, setProductUpwardImg] = useState("");
  const [productDownWardImg, setProductDownWardImg] = useState("");
  const [userID, setUserID] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  let { id } = useParams();
  const [productData, setProductData] = useState();
  const isMounted = useIsMounted();
  const [toggleBtn, setToggleBtn] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [doneText, setDoneText] = useState("");
  const size = ScreenSize();
  const style = {
    position: "absolute",
    top: "50%",
    right: size.width < 600 ? "1%" : "40%",
    transform: "translateX(50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "0.5em",

    // boxShadow: 24,
    p: 4,
  };

  async function getProductDetail() {
    if (isMounted.current) {
      await axios
        .get(`/api/auth/product?productId=${id}`)
        .then((res) => [
          setProductName(res?.data?.productName),
          setProductPrice(res?.data?.productPrice),
          setProductDetail(res?.data?.productDetail),
          setProductOrigin(res?.data?.productOrigin),
          setProductCategory(res?.data?.productCategory),
          setProductType(res?.data?.productType),
          setProductDeliveryTime(res?.data?.productDeliveryTime),
          setProductSpecification(res?.data?.productSpecification),
          setProductFrontImg(res?.data?.proFrontIMAGE[0]?.URL),
          setProductBackImg(res?.data?.proBackIMAGE[0]?.URL),
          setProductUpwardImg(res?.data?.proUpwardIMAGE[0]?.URL),
          setProductDownWardImg(res?.data?.proDownWardIMAGE[0]?.URL),

          setProductData(res),
        ]);
    }
  }

  useEffect(() => {
    getProductDetail();
    // console.log({ productData: productData });
    // console.log({ productFrontImg: productFrontImg });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("productPrice", productPrice);
      formData.append("productDetail", productDetail);
      formData.append("productOrigin", productOrigin);
      formData.append("productCategory", productCategory);
      formData.append("productType", productType);
      formData.append("productDeliveryTime", productDeliveryTime);
      formData.append("productSpecification", productSpecification);
      formData.append("proFrontIMAGE", productFrontImg);
      formData.append("proBackIMAGE", productBackImg);
      formData.append("proUpwardIMAGE", productUpwardImg);
      formData.append("proDownWardIMAGE", productDownWardImg);

      const { data } = axios.put(
        `/api/auth/update-product?productId=${id}`,
        formData
      );
      // await USER.updateUserData(data);
      // console.log({ profileImg: profileImg });

      if (isMounted.current) {
        setSuccess("Success!");
        // setSuccess(data);
        console.log({ data: data });
      }

      console.log("Success");
      setToggleBtn(true);
      setTimeout(() => {
        setSuccess("");
        // setOpen(false);
      }, 1500);
      // }
    } catch (error) {
      console.log(error + "error saving");
    }
  }

  function GetFrontImg() {
    const [frontImgRes, setFrontImgRes] = React.useState("");

    function frontImgUploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setFrontImgRes(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { frontImgRes, frontImgUploader };
  }
  const { frontImgRes, frontImgUploader } = GetFrontImg();
  //
  function GetBackImg() {
    const [backImgRes, setBackImgRes] = React.useState("");

    function backImgUploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setBackImgRes(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { backImgRes, backImgUploader };
  }
  const { backImgRes, backImgUploader } = GetBackImg();

  //
  function GetUpwardImg() {
    const [upWardImgRes, setupWardImgRes] = React.useState("");

    function upwardImgUploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setupWardImgRes(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { upWardImgRes, upwardImgUploader };
  }
  const { upWardImgRes, upwardImgUploader } = GetUpwardImg();
  //

  function GetDownWardImg() {
    const [downwardImgRes, setdownwardImgRes] = React.useState("");

    function downWardImgUploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setdownwardImgRes(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { downwardImgRes, downWardImgUploader };
  }
  const { downwardImgRes, downWardImgUploader } = GetDownWardImg();

  async function handleDelete() {
    setOpen(true);
    await axios.delete(`/api/auth/delete-product?productId=${id}`);

    setTimeout(() => {
      setDoneText("Successful!");
    }, 700);
    setTimeout(() => {
      navigate("/sellerprofilescreen/sellerproduct/all-collections");

      setOpen(false);
    }, 1500);
  }
  return (
    <div className="sellerProductDetailScreen">
      <div className="sellerProductDetailScreenTop">
        <span>
          Product <i className="fa-solid fa-caret-right productFaIcon"></i>{" "}
          Products details
        </span>
      </div>
      <form className="sellerProductDetailScreenBottom" onSubmit={handleSubmit}>
        <div className="productDetailBottomA">
          <ProductSales />
          <ProductIncome />
          <ProductSavess />
        </div>
        <div className="productDetailBottomB">
          <label htmlFor="front-view" className="add-img-box">
            <input
              filename="proFrontIMAGE"
              onChange={(e) => {
                setProductFrontImg(e.target.files[0]);
                frontImgUploader(e);
              }}
              type="file"
              id="front-view"
              style={{ display: "none" }}
            />
            <img
              src={frontImgRes ? frontImgRes : productFrontImg}
              alt="front-view"
              className={frontImgRes ? "add-product-img" : "add-product-img"}
            />
          </label>
          <label htmlFor="back-view" className="add-img-box">
            <input
              filename="proBackIMAGE"
              onChange={(e) => {
                setProductBackImg(e.target.files[0]);
                backImgUploader(e);
              }}
              type="file"
              id="back-view"
              style={{ display: "none" }}
            />
            <img
              src={backImgRes ? backImgRes : productBackImg}
              alt="back-view"
              className={backImgRes ? "add-product-img" : "add-product-img"}
            />
          </label>
          <label htmlFor="upward-view" className="add-img-box">
            <input
              filename="proUpwardIMAGE"
              onChange={(e) => {
                setProductUpwardImg(e.target.files[0]);
                upwardImgUploader(e);
              }}
              type="file"
              id="upward-view"
              style={{ display: "none" }}
            />
            <img
              src={upWardImgRes ? upWardImgRes : productUpwardImg}
              alt="upward-view"
              className={upWardImgRes ? "add-product-img" : "add-product-img"}
            />
          </label>
          <label htmlFor="downWard-view" className="add-img-box">
            <input
              filename="proDownWardIMAGE"
              onChange={(e) => {
                setProductDownWardImg(e.target.files[0]);
                downWardImgUploader(e);
              }}
              type="file"
              id="downWard-view"
              style={{ display: "none" }}
            />
            <img
              src={downwardImgRes ? downwardImgRes : productDownWardImg}
              alt="downward-view"
              className={downwardImgRes ? "add-product-img" : "add-product-img"}
            />
          </label>
        </div>
        <div className="productDetailBottomC">
          <div className="productDetailBottomCLeft">
            <div className="productDetailBottomeLeftCFirst">
              <div className="productDetailInputContainer">
                <span>Product Name :</span>
                <input
                  disabled={toggleBtn ? true : false}
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="productDetailInputContainer">
                <span>Product Price:</span>
                <input
                  disabled={toggleBtn ? true : false}
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="productDetailInputContainer">
              <span>Product Details :</span>

              <textarea
                disabled={toggleBtn ? true : false}
                value={productDetail}
                onChange={(e) => setProductDetail(e.target.value)}
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <div className="productDetailInputContainer">
              <span>Origin Story of the Product :</span>
              <textarea
                disabled={toggleBtn ? true : false}
                value={productOrigin}
                onChange={(e) => setProductOrigin(e.target.value)}
                cols="10"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="productDetailBottomCRight">
            <div className="productDetailInputContainer">
              <span>Categories :</span>
              <select
                value={productCategory ?? ""}
                onChange={(e) => setProductCategory(e.target.value)}
                className="productDetailRightInput"
              >
                <option value="clothingsAndAccessories">
                  Clothings & Accessories
                </option>
                <option value="healthAndBeauty">Health & Beauty</option>
                <option value="pottery">Pottery</option>
                <option value="artAndCraft">Art & Craft</option>
                <option value="othersCategories">Other Categories</option>
              </select>
            </div>
            <div className="productDetailInputContainer">
              <span>Delivery Time :</span>
              <input
                disabled={toggleBtn ? true : false}
                type="date"
                value={productDeliveryTime ?? ""}
                onChange={(e) => setProductDeliveryTime(e.target.value)}
                className="productDetailRightInput"
              />
            </div>
            <div className="productDetailInputContainer">
              <span>Product Specifications :</span>
              <input
                disabled={toggleBtn ? true : false}
                value={productSpecification ?? ""}
                onChange={(e) => setProductSpecification(e.target.value)}
                className="productDetailRightInput"
              />
            </div>
            {toggleBtn ? (
              <div
                className="productDetailBtnContainer"
                onClick={() => setToggleBtn(false)}
              >
                Edit Product
              </div>
            ) : (
              <button className="productDetailBtnContainer">Save</button>
            )}
            <div className="productDetailBtnContainer" onClick={handleDelete}>
              Delete Product
            </div>

            <h3 style={{ color: "green" }}>{success && success}</h3>

            {/* <div className="productDetailInputContainer">
              <input
                type="text"
                placeholder="Tye & Dye"
                className="productDetailRightInput"
              />
            </div> */}
          </div>
        </div>
        <hr className="sellerProductReviewDivider" />

        <div className="productDetailBottomD">
          <div className="productDetailBottomDTop">
            <span>Product reviews 200</span>
            <div className="productDetailReviewUnderline"></div>
          </div>
          <div className="productDetailBottomDBottom">
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <SellerProductDetailReview />
            <Pagination count={10} variant="outlined" />
          </div>
        </div>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="work-book-modal">
            <img src={spinner} alt="" />
            <h4 style={{ color: "green" }}>{doneText && doneText}</h4>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SellerProductDetailScreen;
