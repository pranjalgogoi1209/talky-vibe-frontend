import React from "react";
import "./signin-msg.scss";
import Image from "next/image";

import greenTextureImg from "@/../public/signin/green-texture.png";

export default function SigninMsg({ isSigninAsGuest, setIsSigninAsGuest }) {
  return (
    <div
      className={`SigninMsg col-xl-5 border position-relative d-flex flex-column justify-content-center align-items-center ${
        isSigninAsGuest ? "flipSigninMsg" : ""
      }`}
    >
      <div className="greenTextureImg h-100 border">
        <Image
          src={greenTextureImg}
          alt="greenTexture"
          layout="intrinsic"
          className="w-100 h-100"
        />
      </div>
      <div className="position-absolute d-flex flex-column justify-content-center align-items-center gap-2 gap-md-3 gap-xl-4 w-100 h-100">
        <h2>{isSigninAsGuest ? "Welcome, Back !" : "Hello, Friend !"} </h2>
        <h5 className="text-muted text-wrap fw-medium text-center">
          {isSigninAsGuest ? "To keep connected," : "Sign In as Guest"}
        </h5>
        {isSigninAsGuest && (
          <h5 className="text-muted text-wrap fw-medium text-center">
            with your personal info
          </h5>
        )}

        <button
          onClick={() =>
            isSigninAsGuest
              ? setIsSigninAsGuest(false)
              : setIsSigninAsGuest(true)
          }
          className="signInBtn btn btn-outline-dark border-2 fw-bold rounded-5"
        >
          {isSigninAsGuest ? "SIGNIN" : "SIGNIN AS GUEST"}
        </button>
      </div>
    </div>
  );
}
