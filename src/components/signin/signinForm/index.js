import React from "react";
import "./signin-form.scss";

export default function SigninForm() {
  return (
    <div className="SigninForm col-xl border d-flex flex-column justify-content-center gap-4">
      <h1 className="fw-bold text-center">SIGN IN</h1>
      <form className="d-flex flex-column gap-4">
        {/* email */}
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter Your Email"
        />

        {/* password */}
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Your Password"
        />

        {/* age and gender */}
        <div className="input-group d-flex gap-3 ">
          <input
            type="number"
            className="form-control rounded-2"
            min="1"
            max="100"
            step="1"
            placeholder="Enter your Age"
          />
          <select
            className="form-select rounded-2 "
            aria-label="Default select example"
          >
            <option selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="submitBtn btn w-100 fw-bold text-light"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
