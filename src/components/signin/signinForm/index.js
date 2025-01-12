import React from "react";
import "./signin-form.scss";

export default function SigninForm() {
  return (
    <div className="SigninForm col-xl border d-flex flex-column justify-content-center gap-1 gap-md-2 gap-lg-3 gap-xl-4">
      <h1 className="lazyDogFont fw-bold text-center">SIGN IN</h1>
      <form className="d-flex flex-column gap-2 gap-md-3 gap-lg-4">
        {/* email */}
        <input
          type="email"
          className="form-control p-md-3 p-xl-2"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
        />

        {/* password */}
        <input
          type="password"
          className="form-control p-md-3 p-xl-2"
          id="password"
          placeholder="Password"
        />

        {/* age and gender */}
        <div className="input-group d-flex gap-3 ">
          <input
            type="number"
            className="form-control rounded-2 p-md-3 p-xl-2"
            min="1"
            max="100"
            step="1"
            placeholder="Age"
          />
          <select
            className="form-select rounded-2 p-md-3 p-xl-2"
            aria-label="Default select example"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="submitBtn btn w-100 fw-bold text-light p-md-3 p-xl-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
