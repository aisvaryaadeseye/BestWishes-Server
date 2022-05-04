import React, { useContext, useEffect } from "react";
import UserContext from "../../provider/userProvider";

const AccountSettings = () => {
  const { state } = useContext(UserContext);

  useEffect(() => {
    console.log({ sellernow: state?.sellerData?.businessIMAGE[0]?.URL });
  });
  return (
    <div>
      AccountSettings
      <img src={state?.sellerData?.businessIMAGE[0]?.URL} alt="" />
    </div>
  );
};

export default AccountSettings;
