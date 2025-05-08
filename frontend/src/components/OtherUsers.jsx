// import React from "react";
// import OtherUser from "./OtherUser";
// import useGetOtherUser from "../hooks/useGetOtherUser";
// import { useSelector } from "react-redux";

// const OtherUsers = () => {
//   //my custom hooks
//   useGetOtherUser();
//   const { otherUsers } = useSelector((store) => store.user);
//   if (!otherUsers) {
//     //early return in react
//     return;
//   }

//   return (
//     <div className="overflow-auto flex-1">
//       {otherUsers?.map((user) => {
//         return <OtherUser key={user._id} user={user} />;
//       })}
//     </div>
//   );
// };

// export default OtherUsers;

import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUser from "../hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const OtherUsers = ({ users }) => {
  useGetOtherUser(); // fetches other users if not already present
  const { otherUsers } = useSelector((store) => store.user);

  const displayUsers = users || otherUsers;

  if (!displayUsers || displayUsers.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">No users found.</div>
    );
  }

  return (
    <div className="overflow-auto flex-1">
      {displayUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
