"use client";

import { useState } from "react";
import "./signin-page.scss";

import SigninForm from "@/components/signin/signinForm";
import SigninMsg from "@/components/signin/signinMsg";

export default function SigninPage() {
  const [isSigninAsGuest, setIsSigninAsGuest] = useState(false);
  return (
    <div className="SigninPage container-fluid vh-100 d-flex align-items-center justify-content-center p-2">
      <div className="signinContainer container rounded-5 shadow-lg">
        <div className="row h-100 p-0 p-md-5 gap-xl-5">
          <SigninForm isSigninAsGuest={isSigninAsGuest} />
          <SigninMsg
            isSigninAsGuest={isSigninAsGuest}
            setIsSigninAsGuest={setIsSigninAsGuest}
          />
        </div>
      </div>
    </div>
  );
}
