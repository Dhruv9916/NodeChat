import React from "react";

function OtherUser() {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://marketplace.canva.com/EAF21qlw744/1/0/1600w/canva-blue-modern-facebook-profile-picture-mtu4sNVuKIU.jpg"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between  gap-2 ">
            <p> Mernstack</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
}

export default OtherUser;
