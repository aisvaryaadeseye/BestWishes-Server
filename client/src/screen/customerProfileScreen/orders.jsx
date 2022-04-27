import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CustomerOrders = () => {
  const [showAll, setShowAll] = useState(true);
  const [showPending, setShowPending] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showCancelled, setShowCancelled] = useState(false);

  const handleshowAll = () => {
    setShowAll(true);
    setShowPending(false);
    setShowCompleted(false);
    setShowCancelled(false);
  };
  const handleShowPending = () => {
    setShowAll(false);
    setShowPending(true);
    setShowCompleted(false);
    setShowCancelled(false);
  };
  const handleShowCompleted = () => {
    setShowAll(false);
    setShowPending(false);
    setShowCompleted(true);
    setShowCancelled(false);
  };
  const handleShowCancelled = () => {
    setShowAll(false);
    setShowPending(false);
    setShowCompleted(false);
    setShowCancelled(true);
  };
  return (
    <div className="customerOrders">
      <div className="customerOrdersTop">
        <h1>Orders</h1>
        <span>Check the status of your order here</span>
        <nav className="orderNavbarContainer">
          <div className="orderNav" onClick={handleshowAll}>
            <Link to="orderAll" className="customerNav">
              {"  "}All{" "}
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showAll ? "flex" : "none" }}
            ></div>
          </div>
          <div className="orderNav" onClick={handleShowPending}>
            <Link to="orderPending" className="customerNav">
              Pending
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showPending ? "flex" : "none" }}
            ></div>
          </div>
          <div className="orderNav" onClick={handleShowCompleted}>
            <Link to="orderCompleted" className="customerNav">
              Completed
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showCompleted ? "flex" : "none" }}
            ></div>
          </div>
          <div className="orderNav" onClick={handleShowCancelled}>
            <Link to="orderCancelled" className="customerNav">
              Cancelled
            </Link>
            <div
              className="orderNavUnderline"
              style={{ display: showCancelled ? "flex" : "none" }}
            ></div>
          </div>
        </nav>
      </div>
      <div className="customerOrdersBottom">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerOrders;
