import React from "react";
import "./welcome.scss";

export default function Welcome() {
  return <div className="container p-4 d-flex flex-column justify-content-center align-items-center">
    <h1 className="fs-1">Welcome</h1>
    <p className="fs-5">Start chatting with people from around the world in just a click!</p>
    <ul>
      <li>Anonymous Chats: Connect randomly and chat freely.</li>
      <li>Share What Matters: Text, images, and emojis—express yourself!</li>
      <li>Find Your Match: Chat based on shared interests or preferences.</li>
    </ul>
  </div>;
}
