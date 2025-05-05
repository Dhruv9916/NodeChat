import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUser from "../hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  //my custom hooks
  useGetOtherUser();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) {
    //early return in react
    return;
  }

  return (
    <div className="overflow-auto">
      {otherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
