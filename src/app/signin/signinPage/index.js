import React from "react";
import "./signin-page.scss";

import SigninForm from "@/components/signin/signinForm";
import SigninMsg from "@/components/signin/signinMsg";

export default function SigninPage() {
  return (
    <div className="SigninPage container-fluid vh-100 d-flex align-items-center">
      <div className="container border rounded-5  h-75 bg-light shadow-lg">
        <div className="row h-100 p-5 d-flex gap-5">
          <SigninForm />
          <SigninMsg />
        </div>
      </div>
    </div>
  );
}
