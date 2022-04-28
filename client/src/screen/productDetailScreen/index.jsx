import React, { useState, useContext, useEffect } from "react";
import productImgS from "../../assets/images/productImgS.jpg";
import productImgS1 from "../../assets/images/productImgS1.jpg";
import productImgS2 from "../../assets/images/productImgS2.jpg";
import productImgS3 from "../../assets/images/productImgS3.jpg";
import productImgS4 from "../../assets/images/productImgS4.jpg";
import ProductDetailAllReviews from "../../component/productDetailScreenReviews/productDetailAllReviews";
import ProductDetailSellerReviews from "../../component/productDetailScreenReviews/productDetailSellerReviews";
import ProductDetailProductReviews from "../../component/productDetailScreenReviews/productDetailsProductReviews";
import "./style.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import MoreSellerProduct from "../../component/moreSellerProduct";
import MoreSellerProductSlide from "../../component/moreSellerProductSlide";
import ProductDetailImgSlide from "../../component/productDetailSlide";
import { Link, useParams } from "react-router-dom";
// import { productDetail } from "../../component/data/productDetail";
import axios from "axios";
import CartContext from "../../provider/cartProvider";

const slideImg = [
  { id: "01", img: productImgS1 },
  { id: "02", img: productImgS2 },
  { id: "03", img: productImgS3 },
  { id: "04", img: productImgS4 },
  { id: "05", img: productImgS4 },
];
var sizeList = [
  { id: "01", text: "S" },
  { id: "02", text: "M" },
  { id: "03", text: "L" },
  { id: "04", text: "XL" },
  { id: "05", text: "XXL" },
];

const ProductDetailScreen = ({ match }) => {
  const [allReview, setAllReview] = useState(true);
  const [productReview, setProductReview] = useState(false);
  const [sellerReview, setSellerReview] = useState(false);
  const [sizeSelect, seySizeSelect] = useState(null);
  const [toggleCart, setToggleCart] = useState(false);
  const [productData, setProductData] = useState({});
  const [imageUrl1, setImageUrl1] = useState([]);
  const [imageUrl2, setImageUrl2] = useState([]);
  const [imageUrl3, setImageUrl3] = useState([]);
  const [imageUrl4, setImageUrl4] = useState([]);
  const [imgUrl1, setImgUrl1] = useState();
  const [imgUrl2, setImgUrl2] = useState();
  const [imgUrl3, setImgUrl3] = useState();
  const [imgUrl4, setImgUrl4] = useState();
  const [getSlideImg, setGetSlideImg] = useState([]);
  const controller = new AbortController();
  var slideImgContainer = [];
  let { id } = useParams();
  const { cartState, CART } = useContext(CartContext);

  // const productDetailText = productData.productDetail;

  function handleAllreview() {
    setAllReview(true);
    setProductReview(false);
    setSellerReview(false);
  }
  function handleProductReview() {
    setAllReview(false);
    setProductReview(true);
    setSellerReview(false);
  }
  function handleSellerReview() {
    setAllReview(false);
    setProductReview(false);
    setSellerReview(true);
  }

  async function getProductDetail() {
    try {
      const { data } = await axios.get(`/api/auth/product?productId=${id}`);
      if (data) {
        setProductData(data);
      }

      // console.log({ productDetail: data });
    } catch (error) {
      console.log(error);
    }
  }

  function showURL(data1, setData1) {
    data1 &&
      data1.map((x, i) => {
        return setData1(x.URL);
      });
  }
  function addSlideImg(data1) {
    data1 &&
      data1.map((x, i) => {
        return slideImgContainer.push(x.URL);
      });
  }
  useEffect(async () => {
    await getProductDetail();
    // console.log({
    //   productImgUrl: productData.proFrontIMAGE,
    // });
    setImageUrl1(productData.proFrontIMAGE);
    setImageUrl2(productData.proBackIMAGE);
    setImageUrl3(productData.proUpwardIMAGE);
    setImageUrl4(productData.proDownWardIMAGE);

    showURL(imageUrl1, setImgUrl1);
    showURL(imageUrl2, setImgUrl2);
    showURL(imageUrl3, setImgUrl3);
    showURL(imageUrl4, setImgUrl4);

    addSlideImg(imageUrl1);
    addSlideImg(imageUrl2);
    addSlideImg(imageUrl3);
    addSlideImg(imageUrl4);
    setGetSlideImg(slideImgContainer);
    // console.log({
    //   getSlideImg: getSlideImg,
    // });

    return () => {
      controller.abort();
    };
  }, [productData]);

  function handleAddtoCart() {
    setToggleCart(true);
    CART.addToCart(productData._id);
  }

  return (
    <div className="product-detail-screen">
      <div className="product-detail-screen-top">
        <div className="product-detail-screen-top-left">
          <div className="product-detail-screen-left-top">
            <span className="product-detail-top-text">
              Home <i className="fa-solid fa-caret-right faRightP"></i>{" "}
              Clothings & Accessories{" "}
              <i className="fa-solid fa-caret-right faRightP"></i> Product Page
            </span>
            <div className="product-detail-img-con">
              <ProductDetailImgSlide
                frontImg={imgUrl1}
                backImg={imgUrl2}
                upwardImg={imgUrl3}
                backWardImg={imgUrl4}
              />
            </div>

            <div className="product-detail-slide-img-con">
              {getSlideImg &&
                getSlideImg.map((x, i) => {
                  return (
                    <div className="product-detail-slide-img" key={i}>
                      <img src={x} alt="" />{" "}
                    </div>
                  );
                })}
            </div>
            <div className="product-detail-review-con">
              <div className="product-detail-review-con-top">
                <div className="pproduct-detail-underline-all"></div>

                <div
                  className="product-detail-review-con-top-text "
                  onClick={handleAllreview}
                >
                  <span>20000 reviews</span>
                  <div
                    style={{ backgroundColor: allReview && "#f69014" }}
                    className="product-detail-review-con-underline"
                  ></div>
                </div>
                <div
                  className="product-detail-review-con-top-text"
                  onClick={handleProductReview}
                >
                  <span>Product reviews 1000</span>
                  <div
                    style={{ backgroundColor: productReview && "#f69014" }}
                    className="product-detail-review-con-underline-product"
                  ></div>
                </div>
                <div
                  className="product-detail-review-con-top-text"
                  onClick={handleSellerReview}
                >
                  <span>Seller reviews 1000</span>
                  <div
                    style={{ backgroundColor: sellerReview && "#f69014" }}
                    className="product-detail-review-con-underline-seller"
                  ></div>
                </div>
              </div>
              <div className="product-detail-review-con-bottom">
                {allReview ? (
                  <ProductDetailAllReviews />
                ) : productReview ? (
                  <ProductDetailProductReviews />
                ) : (
                  <ProductDetailSellerReviews />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="product-detail-screen-top-right">
          <div className="product-detail-screen-top-right-top">
            <span>Chesterfield Store</span>
            <h2>{productData.productName}</h2>
            <div className="product-detail-rating-con">
              <h6 className="product-detail-rating-text">Product rating: </h6>
              {/* <div className="star-rating"> */}
              {[...Array(5)].map((star, i) => {
                return (
                  <h6 key={i} className="cart-item-star">
                    &#9733;
                  </h6>
                );
              })}
              {/* </div>{" "} */}
            </div>
            <h3>€{productData.productPrice}</h3>
            {/* <hr className="sellerProductDivider" /> */}

            <div className="product-select-size-con">
              <span>Size : </span>

              <div className="product-size-list-container">
                {sizeList.map((x, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        backgroundColor:
                          sizeSelect?.text === x.text && "#fef5ed",
                      }}
                      className="select-size-box"
                      onClick={() => seySizeSelect(x)}
                    >
                      <span
                        style={{
                          color: sizeSelect?.text === x.text && "#dd970e",
                        }}
                      >
                        {x.text}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="product-detail-delivery-con">
                <span>Delivery Time : </span>
                <span>Item will be deliveredin 7 days</span>
              </div>
              <div className="product-detail-quantity-con">
                <span>Quantity : </span>
                <div className="add-remove-div">
                  <div className="add-remove-btn">
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </div>
                  <div className="cart-item-counter">
                    <span>0</span>
                  </div>
                  <div className="add-remove-btn">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              {toggleCart ? (
                <div className="product-detail-cont-btn">
                  <div className="product-detail-continue-btn">
                    <span>Continue shopping</span>
                  </div>
                  <Link to="/cart-screen" className="product-detail-check-btn">
                    <span>View cart and Check-out</span>
                  </Link>
                </div>
              ) : (
                // <div className="product-detail-add-btn">
                <div
                  className="product-detail-add-btn"
                  onClick={handleAddtoCart}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>Add to cart</span>
                </div>
                // </div>
              )}
            </div>
          </div>
          <div className="product-detail-screen-top-right-bottom">
            <div className="product-origin-text-container">
              <h4>Origin story of the product</h4>
              <span>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"see more "}
                  readLessText={"see less "}
                >
                  {`${productData.productOrigin}`}
                </ReactReadMoreReadLess>
              </span>
            </div>
            <div className="product-specification-container">
              <h4>Product Specifications</h4>
              <span>
                <i className="fa fa-circle faaCircle" aria-hidden="true"></i>
                {productData.productSpecification}
              </span>
              {/* <span>
                <i className="fa fa-circle faaCircle" aria-hidden="true"></i>
                100% cotton wool
              </span>
              <span>
                <i className="fa fa-circle faaCircle" aria-hidden="true"></i>
                Tye & Dye
              </span> */}
            </div>
            <div className="product-origin-text-container">
              <h4>Product Details :</h4>
              <span>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"see more "}
                  readLessText={"see less "}
                >
                  {`${productData.productDetail}`}
                </ReactReadMoreReadLess>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-screen-bottom">
        <div className="product-detail-screen-bottom-more-product">
          <div className="bottom-more-product-top">
            <div className="more-product-text-con">
              <span>More products from seller</span>
              <div className="more-product-underline"></div>
            </div>
            <div className="seemore-con">
              <span>
                {" "}
                SEE MORE <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
          </div>
          <div className="bottom-more-product-bottom">
            <MoreSellerProductSlide />
          </div>
        </div>
        <div className="product-detail-screen-bottom-similar-product">
          <div className="bottom-more-product-top">
            <div className="more-product-text-con">
              <span>Similar products</span>
              <div className="similar-product-underline"></div>
            </div>
            <div className="seemore-con">
              <span>
                {" "}
                SEE MORE <i className="fa-solid fa-chevron-right"></i>
              </span>
            </div>
          </div>
          <div className="bottom-more-product-bottom">
            <MoreSellerProductSlide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
