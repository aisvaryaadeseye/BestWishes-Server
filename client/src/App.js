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
function App() {
  const { state, USER } = useContext(UserContext);

  useEffect(() => {
    USER.recoverData();
    USER.recoverisSeller();
    USER.recoverSellerData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/productScreenClothing"
            element={<ProductScreenClothing />}
          />
          <Route
            path="/productScreenHealth"
            element={<ProductScreenHealth />}
          />
          <Route path="/productScreenArt" element={<ProductScreenArt />} />
          <Route
            path="/productScreenPottery"
            element={<ProductScreenPottery />}
          />
          <Route
            path="/productScreenOthers"
            element={<ProductScreenOthers />}
          />
          <Route path="/blogScreen" element={<BlogScreen />} />
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
              state.token ? <SellerProfileScreen /> : <Navigate to="/" />
            }
          >
            <Route path="overview" element={<ProfileOverView />} />
            <Route path="stockreports" element={<StockReports />} />
            {/* === */}
            <Route path="sellerproduct" element={<SellerProducts />}>
              <Route path="all-collections" element={<AllCollections />} />
              <Route path="health-beauty" element={<HealthAndBeauty />} />
              <Route path="other-categories" element={<OtherCategories />} />
              <Route
                path="clothings-accessories"
                element={<ClothingsAndAccessories />}
              />
              <Route path="pottery" element={<Pottery />} />
              <Route path="art-craft" element={<ArtAndCraft />} />
            </Route>

            <Route path="editprofile" element={<EditProfile />} />
          </Route>
          {/* =====CustomerProfileScreen==== */}
          <Route
            path="/customerProfileScreen"
            element={
              state.token ? <CustomerProfileScreen /> : <Navigate to="/" />
            }
          >
            <Route path="messages" element={<Messages />} />
            {/* =====customer order =========== */}
            <Route path="customerOrders" element={<CustomerOrders />}>
              <Route path="orderAll" element={<OrdersAll />} />
              <Route path="orderPending" element={<OrdersPending />} />
              <Route path="orderCompleted" element={<OrdersCompleted />} />
              <Route path="orderCancelled" element={<OrdersCancelled />} />
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
              element={<EditCustomerProfile />}
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
