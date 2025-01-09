import React from "react";
import "./signin-msg.scss";

export default function SigninMsg() {
  return (
    <div className="SigninMsg col-xl border">
      <h1>Hello, Friend !</h1>
      <p>Signin as Guest</p>
      <button className="btn btn-primary">SIGNIN</button>
    </div>
  );
}
