import React, { useEffect, useContext, useState } from "react";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import BlogScreen from "./screen/blogScreen";
import HomeScreen from "./screen/homeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserContext from "./provider/userProvider";
import ProductScreenArt from "./screen/productScreen/artAndCraft";
import ProductScreenHealth from "./screen/productScreen/healthAndBeauty";
import ProductScreenClothing from "./screen/productScreen/clothingsAndAccessories";
import ProductScreenPottery from "./screen/productScreen/pottery";
import ProductScreenOthers from "./screen/productScreen/otherCategories";
import LoginScreen from "./screen/loginScreen";
import RegisterScreen from "./screen/registerScreen";
import CustomerRegisterAccount from "./screen/registerScreen/customerAccount";
import SellerRegisterAccount from "./screen/registerScreen/sellerAccount";
import ForgotPasswordScreen from "./screen/forgotPassword";
import ResetPasswordScreen from "./screen/resetPassword";
import SellerProfileScreen from "./screen/sellerProfileScreen";
import CustomerProfileScreen from "./screen/customerProfileScreen";
import ProfileOverView from "./screen/sellerProfileScreen/overview";
import EditProfile from "./screen/sellerProfileScreen/editProfile";
import StockReports from "./screen/sellerProfileScreen/stockReports";
import AccountVerifcationScreen from "./screen/accountVerifation";
import MobileNav from "./component/mobileNav";
import EditCustomerProfile from "./screen/customerProfileScreen/editCustomerProfile";
import Messages from "./screen/customerProfileScreen/messages";
import CustomerOrders from "./screen/customerProfileScreen/orders";
import OrdersAll from "./component/orderNavs/ordersAll";
import OrdersPending from "./component/orderNavs/ordersPending";
import OrdersCompleted from "./component/orderNavs/ordersCompleted";
import OrdersCancelled from "./component/orderNavs/ordersCancelled";
import SavedItems from "./screen/customerProfileScreen/savedItems";
import CustomerPayment from "./screen/customerProfileScreen/payment";
import PayWithCard from "./component/customerPayment/payWithCard";
import PayWithPayPal from "./component/customerPayment/payWithPayPal";
import BecomeSeller from "./screen/customerProfileScreen/becomeSeller";
import AccountSettings from "./screen/customerProfileScreen/accountSettings";
import SellerProducts from "./screen/sellerProfileScreen/products";
import ClothingsAndAccessories from "./component/sellerProducts/clothingsAndAccessories";
import HealthAndBeauty from "./component/sellerProducts/healthAndBeauty";
import OtherCategories from "./component/sellerProducts/otherCategories";
import AllCollections from "./component/sellerProducts/allCollections";
import Pottery from "./component/sellerProducts/pottery";
import ArtAndCraft from "./component/sellerProducts/artAndCraft";
import Backdrop from "./component/backDrop";
import SideDrawer from "./component/navDrawer";
import SellerProductDetailScreen from "./screen/sellerProductDetailScreen";
import SellerMessages from "./screen/sellerProfileScreen/messages";
import SellerMessageInbox from "./component/sellerMessageInbox";
import SellerMessageChat from "./component/sellerMessageChat";
import SellerOrders from "./screen/sellerProfileScreen/orders";
import SellerSales from "./screen/sellerProfileScreen/sales";
import SellerIncome from "./screen/sellerProfileScreen/income";
import SellerAllIncome from "./component/sellerIcomeNav/sellerAllIncome";
import SellerPottery from "./component/sellerIcomeNav/sellerPottery";
import SellerClothingAndAccessories from "./component/sellerIcomeNav/clothingAndAccessories";
import SellerHealthAndBeauty from "./component/sellerIcomeNav/healthAndBeauty";
import SellerArtAndCraft from "./component/sellerIcomeNav/artAndCraft";
import SellerOtherCategories from "./component/sellerIcomeNav/otherCategories";
import SellerReviews from "./screen/sellerProfileScreen/reviews";
import BlogLifestyle from "./component/blogScreenNav/lifestyle";
import BlogNews from "./component/blogScreenNav/news";
import BlogEvents from "./component/blogScreenNav/events";
import BlogUpdate from "./component/blogScreenNav/update";
import BlogTipsAndTricks from "./component/blogScreenNav/titpsAndtricks";
import CartScreen from "./screen/cartScreen/cartScreen";
import CartBuyerAddress from "./screen/cartScreen/cartBuyerAddress";
import CartBuyerPayment from "./screen/cartScreen/cartBuyerPayment";
import CartBuyerSummary from "./screen/cartScreen/cartBuyerSummary";
import SellerProductCollection from "./screen/sellerProductCollection";
import SellerAllCollectionNav from "./component/sellerProductCollectionNav/sellerAllCollectionNav";
import SellerClothingAccessoriesNav from "./component/sellerProductCollectionNav/sellerClothingAccessoriesNav";
import SellerArtCraftNav from "./component/sellerProductCollectionNav/sellerArtCraftNav";
import SellerHealthBeautyNav from "./component/sellerProductCollectionNav/sellerHealthBeautyNav";
import SellerOtherCategoriesNav from "./component/sellerProductCollectionNav/sellerOtherCategoriesNav";
import SellerPotteryNav from "./component/sellerProductCollectionNav/sellerPotteryNav";
import ProductDetailScreen from "./screen/productDetailScreen";
import AddProductScreen from "./screen/addProductScreen";
import CartContext from "./provider/cartProvider";
import { useIsMounted } from "./component/isMounted";
import axios from "axios";
function App() {
  const { state, USER } = useContext(UserContext);
  const { CART } = useContext(CartContext);
  const [sideToggle, setSideToggle] = useState(false);
  const [getOrders, setGetOrders] = useState([]);
  const [getCustomerOrder, setGetCustomerOrder] = useState([]);
  const [getToken, setGetToken] = useState("");
  const [tokenState, settokenState] = useState(true);
  const [getSellerPro, setGetSellerPro] = useState([]);
  const [token, setToken] = useState("");
  const isMounted = useIsMounted();

  useEffect(() => {
    setToken(state?.token);
    // console.log({ token: token });
  });
  useEffect(async () => {
    await USER.recoverisSeller();
    await USER.recoverSwitchUser();
    await USER.recoverData();
    await USER.recoverSellerData();
    await USER.recoverSaveSeller();
    await USER.recoverSwitchUser();
    await CART.recoverCart();
  }, []);

  async function getSellerProducts() {
    try {
      const { data } = await axios.get(
        `/api/auth/seller-product-data?token=${token}`
      );
      if (data) {
        if (isMounted.current) {
          setGetSellerPro(data);
        }
      }

      // console.log({ getSellerPro: getSellerPro });
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllProducts() {
    try {
      const { data } = await axios.get("/api/auth/products");
      if (isMounted.current) {
        await USER.saveAllProducts(data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function getSellerOrders() {
    const { data } = await axios.get(
      `/api/auth/seller-orders?sellerID=${state?.user?.user?._id}`
    );
    if (isMounted.current) {
      setGetOrders(data[0]?.orderItem);
    }
  }
  async function getCustomerOrders() {
    const { data } = await axios.get(
      `/api/auth/customer-orders?customerID=${state?.user?.user?._id}`
    );
    if (isMounted.current) {
      setGetCustomerOrder(data[0]?.orderItem);
    }
  }

  useEffect(() => {
    getSellerOrders();
    getCustomerOrders();
    getSellerProducts();
    getAllProducts();
  }, [getCustomerOrder, getSellerPro]);

  useEffect(async () => {
    if (localStorage.getItem("authToken")) {
      await settokenState(true);
    } else {
      settokenState(false);
    }
    // console.log({ getToken: getToken });
  }, [state, tokenState]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MobileNav click={() => setSideToggle(true)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/product-detail-screen/:id"
            element={<ProductDetailScreen />}
          />
          <Route path="/add-product-screen" element={<AddProductScreen />} />

          <Route
            path="/product-screen-clothing"
            element={<ProductScreenClothing />}
          />

          <Route
            path="/product-screen-health"
            element={<ProductScreenHealth />}
          />
          <Route path="/product-screen-art" element={<ProductScreenArt />} />
          <Route
            path="/product-screen-pottery"
            element={<ProductScreenPottery />}
          />
          <Route
            path="/product-screen-others"
            element={<ProductScreenOthers />}
          />
          <Route path="/cart-screen" element={<CartScreen />} />
          <Route path="/cart-buyer-address" element={<CartBuyerAddress />} />
          <Route path="/cart-buyer-payment" element={<CartBuyerPayment />} />
          <Route path="/cart-buyer-summary" element={<CartBuyerSummary />} />
          <Route
            path="/seller-product-details-screen/:id"
            element={<SellerProductDetailScreen />}
          />
          {/* ==============seller product collection ======== */}
          <Route
            path="/seller-product-collection/:id"
            element={<SellerProductCollection />}
          >
            <Route
              path="all-collections"
              element={<SellerAllCollectionNav />}
            />
            <Route
              path="clothings-accessories"
              element={<SellerClothingAccessoriesNav />}
            />
            <Route path="art-craft" element={<SellerArtCraftNav />} />
            <Route path="health-beauty" element={<SellerHealthBeautyNav />} />
            <Route
              path="other-categories"
              element={<SellerOtherCategoriesNav />}
            />
            <Route path="pottery" element={<SellerPotteryNav />} />
          </Route>
          {/* ==============seller product collection ===XXX===== */}

          {/* ====blogScreen==== */}
          <Route path="/blog-screen" element={<BlogScreen />}>
            <Route path="lifestyle" element={<BlogLifestyle />} />
            <Route path="tips-tricks" element={<BlogTipsAndTricks />} />
            <Route path="news" element={<BlogNews />} />
            <Route path="events" element={<BlogEvents />} />
            <Route path="update" element={<BlogUpdate />} />
          </Route>
          {/* ====blogScreen==XXX== */}
          <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
          <Route path="/resetPassword" element={<ResetPasswordScreen />} />
          <Route path="/verifyAccount" element={<AccountVerifcationScreen />} />
          {/* ========registerScreen====== */}
          <Route path="/registerScreen" element={<RegisterScreen />}>
            <Route
              path="customerRegisterAccount"
              element={<CustomerRegisterAccount />}
            />
            <Route
              path="sellerRegisterAccount"
              element={<SellerRegisterAccount />}
            />
          </Route>
          {/* =========loginScreen====== */}
          <Route path="/loginScreen" element={<LoginScreen />}></Route>
          {/* =====sellerProfileScreen==== */}
          <Route
            path="/sellerprofilescreen"
            element={
              tokenState ? (
                <SellerProfileScreen getOrders={getOrders && getOrders} />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route
              path="overview"
              element={<ProfileOverView getOrders={getOrders && getOrders} />}
            />
            <Route path="stockreports" element={<StockReports />} />
            {/* === */}
            <Route path="sellerproduct" element={<SellerProducts />}>
              <Route
                path="all-collections"
                element={
                  <AllCollections getSellerPro={getSellerPro && getSellerPro} />
                }
              />
              <Route
                path="health-beauty"
                element={
                  <HealthAndBeauty
                    getSellerPro={getSellerPro && getSellerPro}
                  />
                }
              />
              <Route
                path="other-categories"
                element={
                  <OtherCategories
                    getSellerPro={getSellerPro && getSellerPro}
                  />
                }
              />
              <Route
                path="clothings-accessories"
                element={
                  <ClothingsAndAccessories
                    getSellerPro={getSellerPro && getSellerPro}
                  />
                }
              />
              <Route
                path="pottery"
                element={
                  <Pottery getSellerPro={getSellerPro && getSellerPro} />
                }
              />
              <Route
                path="art-craft"
                element={
                  <ArtAndCraft getSellerPro={getSellerPro && getSellerPro} />
                }
              />
            </Route>
            {/* ===   seller message */}
            <Route path="seller-message" element={<SellerMessages />}>
              <Route
                path="seller-message-inbox"
                element={<SellerMessageInbox />}
              />
              <Route
                path="seller-message-chat"
                element={<SellerMessageChat />}
              />
            </Route>

            <Route path="editprofile" element={<EditProfile />} />
            <Route path="seller-review" element={<SellerReviews />} />
            <Route
              path="seller-orders"
              element={<SellerOrders getOrders={getOrders && getOrders} />}
            />
            <Route path="seller-sales" element={<SellerSales />} />
            {/* ===selller income===== */}
            <Route path="seller-income" element={<SellerIncome />}>
              <Route path="all-income" element={<SellerAllIncome />} />
              <Route
                path="clothing-accessories"
                element={<SellerClothingAndAccessories />}
              />
              <Route path="health-beauty" element={<SellerHealthAndBeauty />} />
              <Route path="pottery" element={<SellerPottery />} />
              <Route path="art-craft" element={<SellerArtAndCraft />} />
              <Route
                path="other-categories"
                element={<SellerOtherCategories />}
              />
            </Route>
          </Route>
          {/* =====CustomerProfileScreen==== */}
          <Route
            path="/customerProfileScreen"
            element={
              tokenState ? (
                <CustomerProfileScreen
                  getCustomerOrder={getCustomerOrder && getCustomerOrder}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="messages" element={<Messages />} />
            {/* =====customer order =========== */}
            <Route path="customerOrders" element={<CustomerOrders />}>
              <Route
                path="orderAll"
                element={
                  <OrdersAll
                    getCustomerOrder={getCustomerOrder && getCustomerOrder}
                  />
                }
              />
              <Route
                path="orderPending"
                element={
                  <OrdersPending
                    getCustomerOrder={getCustomerOrder && getCustomerOrder}
                  />
                }
              />
              <Route
                path="orderCompleted"
                element={
                  <OrdersCompleted
                    getCustomerOrder={getCustomerOrder && getCustomerOrder}
                  />
                }
              />
              <Route
                path="orderCancelled"
                element={
                  <OrdersCancelled
                    getCustomerOrder={getCustomerOrder && getCustomerOrder}
                  />
                }
              />
            </Route>
            {/* ========= XX===============*/}

            {/* =====customer payment =========== */}
            <Route path="customerPayment" element={<CustomerPayment />}>
              <Route path="payWithCard" element={<PayWithCard />} />
              <Route path="payWithPayPal" element={<PayWithPayPal />} />
            </Route>
            {/* ========= XX===============*/}
            <Route
              path="editCustomerProfile"
              element={<EditCustomerProfile showDescription={true} />}
            />
            <Route path="savedItems" element={<SavedItems />} />
            <Route path="becomeSeller" element={<BecomeSeller />} />
            <Route path="account-settings" element={<AccountSettings />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      ,
    </div>
  );
}

export default App;
