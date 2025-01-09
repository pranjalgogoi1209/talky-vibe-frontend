import React from "react";

import StartToTalk from "@/components/home/startToTalk";
import Welcome from "@/components/home/welcome";
import "./home.scss";

export default function HomePage() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center homePage">
    <div className="container">
      <div className="row h-100  p-4">

        {/* Left Container */}
        <div 
          className="col-md-6 d-flex justify-content-center align-items-center  text-white "
          >
          <StartToTalk />
        </div>

        {/* Right Container */}
        <div className="col-md-6 d-flex justify-content-center align-items-center  text-white">
          <Welcome />
        </div>
      </div>
    </div>
  </div>
  );
}
