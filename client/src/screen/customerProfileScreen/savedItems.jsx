import React from "react";
import SavedItem from "../../component/savedItem";
import "./style.css";

const SavedItems = () => {
  return (
    <div className="savedItems">
      <div className="SavedItemsTop">
        <h1>Saved Items</h1>
        <p>All the products you saved are all here</p>
      </div>
      <div className="SavedItemsBottom">
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
      </div>
    </div>
  );
};

export default SavedItems;
