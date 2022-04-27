import React, { useState } from "react";
import EditCustomerProfile from "../customerProfileScreen/editCustomerProfile";
import pen from "../../assets/icons/pen.svg";

import EditSellerProfileSlider from "../../component/editSellerProfileSlider";
const EditProfile = () => {
  const [showDone, setShowDone] = useState(false);
  return (
    <div className="editSellerProfileProfile">
      <div className="editSellerProfileProfileTop">
        <div
          className="sellerImgDoneContainer "
          style={{ display: showDone ? "flex" : "none" }}
          onClick={() => setShowDone(false)}
        >
          <i className="fa fa-check-circle editPenDone" aria-hidden="true"></i>
          <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>
        <label htmlFor="editSellerImg">
          <img
            src={pen}
            alt=""
            className="editPen"
            onClick={() => setShowDone(true)}
          />
          <input type="file" id="editSellerImg" style={{ display: "none" }} />
        </label>
        <input type="file" id="edit" hidden />
        <EditSellerProfileSlider />
      </div>
      <div className="editSellerProfileProfileBottom">
        <EditCustomerProfile showDescription={false} />
      </div>
    </div>
  );
};

export default EditProfile;
