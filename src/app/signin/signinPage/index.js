import React from "react";
import "./signin-page.scss";

import SigninForm from "@/components/signin/signinForm";
import SigninMsg from "@/components/signin/signinMsg";

export default function SigninPage() {
  return (
    <div>
      <SigninForm />
      <SigninMsg />
    </div>
  );
}
