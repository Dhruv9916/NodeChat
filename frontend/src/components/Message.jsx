import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://marketplace.canva.com/EAF21qlw744/1/0/1600w/canva-blue-modern-facebook-profile-picture-mtu4sNVuKIU.jpg"
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 text-white">12:45</time>
      </div>
      <div className="chat-bubble">You were the chosen one</div>
    </div>
  );
}

export default Message;
