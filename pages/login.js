import React from "react";
import loginStyle from "../styles/Login.module.css";
import Image from "next/image";

function Login() {
  return (
    <>
      <div className={`container-fluid ${loginStyle.main}`}>
        <div className={`card ${loginStyle.card} text-center`}>
          <div className="d-flex justify-content-center mb-4">
            <Image
              src="/images/logo.png"
              width="85px"
              height="30px"
              alt="image"
            />
          </div>
          <h4>Please login with your account</h4>
          <span className="d-flex justify-content-center mt-4 mb-4">
            <button
              type="button"
              className={`btn btn-outline-danger ${loginStyle.customerBtn}`}
            >
              <h5
                style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                }}
              >
                Customer
              </h5>
            </button>
            <button
              type="button"
              className={`btn btn-outline-secondary ${loginStyle.sellerBtn}`}
            >
              <h5
                style={{
                  color: "#9B9B9B",
                  fontSize: "14px",
                }}
              >
                Seller
              </h5>
            </button>
          </span>
          <div className="mb-2">
            <input
              type="email"
              className="form-control mb-2"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control mb-2"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>
          <div
            className="d-flex justify-content-end mb-2 "
            style={{ color: "#DB3022" }}
          >
            <p>Forgot Password ?</p>
          </div>
          <button
            type="button"
            className="btn btn-danger mb-3"
            style={{ borderRadius: "50px" }}
          >
            LOGIN
          </button>
          <p>
            Dont have a Tokopedia account?{""}
            <span style={{ color: "#DB3022" }}>Register</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
