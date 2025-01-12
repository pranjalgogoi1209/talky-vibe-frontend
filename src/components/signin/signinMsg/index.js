import React from "react";
import "./signin-msg.scss";
import Image from "next/image";

import greenTextureImg from "@/../public/signin/green-texture.png";

export default function SigninMsg() {
  return (
    <div className="SigninMsg col-xl-5 border position-relative d-flex flex-column justify-content-center align-items-center">
      <div className="greenTextureImg h-100 border">
        <Image
          src={greenTextureImg}
          alt="greenTexture"
          layout="intrinsic"
          className="w-100 h-100"
        />
      </div>
      <div className="position-absolute d-flex flex-column justify-content-center align-items-center gap-2 gap-md-3 gap-xl-4 w-100 h-100">
        <h2>Hello, Friend !</h2>
        <h5 className="text-muted fw-medium text-center">Sign In as Guest</h5>
        <button className="signInBtn btn btn-outline-dark border-2 fw-bold rounded-5">
          SIGNIN
        </button>
      </div>
    </div>
  );
}
