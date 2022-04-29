import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { Container } from "../../component/styles/Container.styled";
import CustomerReview from "../../component/customerReview";
import {
  CustomerHead,
  CustomerReviewContainer,
  CustomerUnderline,
  SubscribeToNewLetter,
  SubscribeToNewLetterLeft,
  SubscribeToNewLetterRight,
  WhoAreWeContainer,
} from "./style";
import WhoAreWe from "../../component/whoAreWe";
import OurBlog from "../../component/ourBlog";
import { whoAreData } from "../../component/data/WhoAreWe";
import ProductSlider from "../../component/productSilde";
import HomeSlider from "../../component/homeSlider";
import CartContext from "../../provider/cartProvider";
import { useNavigate } from "react-router-dom";
import UserContext from "../../provider/userProvider";
import { useIsMounted } from "../../component/isMounted";
function HomeScreen() {
  const { state, USER } = useContext(UserContext);
  const [hookState, setState] = useState();
  const navigate = useNavigate();

  // const { cartState, CART } = useContext(CartContext);

  const isMounted = useIsMounted();

  // useEffect(() => {
  //   asyncOperation().then((data) => {
  //     if (isMounted.current) {
  //       setState(data);
  //     }
  //   });
  // });

  useEffect(async () => {
    // console.log({ swichUswer: state.switchUser });

    if (isMounted.current) {
      if (!state.switchUser) {
        // console.log({ false: false });
        navigate("/sellerprofilescreen/overview");
      }
    }
  }, [state]);
  return (
    <Container>
      {/* ===========topContainer================= */}
      <div className="homePageTop">
        <HomeSlider />
      </div>

      {/* ================top container ===xx=============== */}
      {/*  ============today deals ==== start========== */}
      <div className="homeTodayDetail">
        <div className="homeTodayDetailTop">
          <div className="todayDetailTextContainer">
            <p>Today's Deals</p>
            <div className="underline"></div>
          </div>
          <div className="seeAllContainer">
            <p>
              SEE ALL{" "}
              <i
                className="fa fa-chevron-right seeAllIcon"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
        <div className="homeTodayDetailBottom">
          <ProductSlider />
        </div>
      </div>

      {/* today product================x=x========== */}
      {/* ===========Customer review============== */}
      <CustomerReviewContainer>
        <CustomerHead>Review from our Seller & Customer</CustomerHead>
        <CustomerUnderline />

        <div className="customerReviewList">
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
        </div>
      </CustomerReviewContainer>

      {/* ============customer review========xx====== */}

      {/* ============popular product=============== */}
      <div className="homeTodayDetail">
        <div className="homeTodayDetailTop">
          <div className="todayDetailTextContainer">
            <p>Popular Products</p>
            <div className="underline"></div>
          </div>
          <div className="seeAllContainer">
            <p>
              SEE ALL{" "}
              <i
                className="fa fa-chevron-right seeAllIcon"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
        <div className="homeTodayDetailBottom">
          <ProductSlider />
          {/* <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <ProductDetail /> */}
        </div>
      </div>
      {/* ============popular product============xx=== */}

      {/* =============Who are we=================== */}

      <WhoAreWeContainer>
        <div className="whoAreWeTop">
          <p>Who are we ?</p>
          <div className="whoAreWeUnderline"></div>
        </div>

        <div className="whoAreWeBottom">
          {whoAreData.map((who, i) => {
            return <WhoAreWe key={i} who={who} />;
          })}
        </div>
      </WhoAreWeContainer>

      {/* =============Who are we========XXX=========== */}

      {/* ============feature product=============== */}
      <div className="homeTodayDetail">
        <div className="homeTodayDetailTop">
          <div className="todayDetailTextContainer">
            <p>Featured Products</p>
            <div className="underline"></div>
          </div>
          <div className="seeAllContainer">
            <p>
              SEE ALL{" "}
              <i
                className="fa fa-chevron-right seeAllIcon"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
        <div className="homeTodayDetailBottom">
          <ProductSlider />
        </div>
      </div>
      {/* ============feature product============xx=== */}

      {/* ============our Blog================ */}
      <OurBlog />

      {/* ============our Blog============XXX==== */}

      {/* ============New Products================ */}
      <div className="homeTodayDetail">
        <div className="homeTodayDetailTop">
          <div className="todayDetailTextContainer">
            <p>New Products</p>
            <div className="underline"></div>
          </div>
          <div className="seeAllContainer">
            <p>
              SEE ALL{" "}
              <i
                className="fa fa-chevron-right seeAllIcon"
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </div>
        <div className="homeTodayDetailBottom">
          <ProductSlider />
        </div>
      </div>

      {/* ============New product============XXX==== */}

      {/* ============Subscriber newsletter=============== */}

      <SubscribeToNewLetter className="subsscribeToNewLetter">
        <SubscribeToNewLetterLeft>
          <div className="newLetterContainer">
            <h2>Subscribe to our newletter</h2>
            <p>Be the first to know about offers and update</p>
            <div className="newLetterEmailContainer">
              <input type="text" placeholder="Email address" />
              <div className="emailSubmitBtn">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </SubscribeToNewLetterLeft>
        <SubscribeToNewLetterRight>
          <div className="sellBestPriceContainer">
            <h2>Sell on Best Price</h2>
            <div className="sellBestPriceText">
              <i className="fa fa-circle faCircle" aria-hidden="true"></i>
              <p>Fill the registeration and submit the required document</p>
            </div>
            <div className="sellBestPriceText">
              <i className="fa fa-circle faCircle" aria-hidden="true"></i>
              <p>Admin will review registeration for authenticity</p>
            </div>
            <div className="sellBestPriceText">
              <i className="fa fa-circle faCircle" aria-hidden="true"></i>
              <p>upload your product and start selling</p>
            </div>

            <div className="becomeSellerBtN">
              <button>Become a Seller Today</button>
            </div>
          </div>
        </SubscribeToNewLetterRight>
      </SubscribeToNewLetter>

      {/* ============Subscriber newsletter==========XXX==== */}
    </Container>
  );
}

export default HomeScreen;
